import React, { useRef, useState } from "react";
import { AnimalVideoFiles } from "../../assets/animals";

const Animals = React.memo(() => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const [endedAudio, SetEndedAudio] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false);


  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const handleClick = (index: number) => {
    if (isPlaying && endedAudio == index) return
    SetEndedAudio(index)
    setIsPlaying(true)
    if (audioRefs.current[index]) {
      audioRefs.current[index].currentTime = 0; 
      audioRefs.current[index].play();
    }
  };

  const handleEnd = () => {
    SetEndedAudio(null)
    setIsPlaying(false)
  }

  return (
    <div className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[1000px]:gap-8 gap-16 p-2">
      {AnimalVideoFiles.map((value, index) => (
        <div
          className="border-2 border-indigo-500 rounded flex flex-col justify-center items-center cursor-pointer"
          key={index}
          onClick={() => handleClick(index)}
          style={index == endedAudio ? {borderColor: "#FFB22C"}: undefined}
        >
          <video
            ref={(element) => (videoRefs.current[index] = element)}
            loop
            preload="auto"
            height={100}
            width={100}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <source src={value.video} type="video/mp4" />
          </video>
          <audio onEnded={handleEnd} ref={(element) => (audioRefs.current[index] = element)} preload="auto">
            <source src={value.audio} type="audio/mp3" />
          </audio>
          <p 
            className="bg-indigo-500 w-full text-center text-white text-xl font-mono max-[1000px]:text-base transition-all duration-300" 
            style={index == endedAudio ? {backgroundColor: "#FFB22C"}: undefined}
            >
            {value.name}
          </p>
        </div>
      ))}
    </div>
  );
});

export default Animals;
