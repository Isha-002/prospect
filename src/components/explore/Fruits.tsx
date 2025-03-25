import React, { useRef, useState } from "react";
import { fruitImages } from "../../assets/fruits";

const Fruits = React.memo(() => {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [endedAudio, setEndedAudio] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (index: number) => {
    if (isPlaying && endedAudio === index) return;
    setEndedAudio(index);
    setIsPlaying(true);
    if (audioRefs.current[index]) {
      audioRefs.current[index].currentTime = 0;
      audioRefs.current[index].play();
    }
  };

  const handleEnd = () => {
    setEndedAudio(null);
    setIsPlaying(false);
  };

  return (
    <div className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[1000px]:gap-8 gap-16 p-2">
      {fruitImages.map((value, index) => (
        <div
          className="border-2 border-indigo-500 rounded flex flex-col justify-center items-center cursor-pointer"
          key={index}
          onClick={() => handleClick(index)}
          style={index === endedAudio ? { borderColor: "#FFB22C" } : undefined}
        >
          <img src={value.image} className="w-44 max-[1000px]:w-25" alt={value.name} />
          <audio
            onEnded={handleEnd}
            ref={(element) => (audioRefs.current[index] = element)}
            preload="auto"
          >
            <source src={value.sound} type="audio/mp3" />
          </audio>
          <p
            className="bg-indigo-500 w-full text-center text-white text-xl font-mono max-[1000px]:text-base transition-all duration-300"
            style={index === endedAudio ? { backgroundColor: "#FFB22C" } : undefined}
          >
            {value.name}
          </p>
        </div>
      ))}
    </div>
  );
});

export default Fruits;