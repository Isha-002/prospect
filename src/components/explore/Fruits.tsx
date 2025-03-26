import React, { useCallback, useRef, useState } from 'react';
import { fruitImages } from '../../assets/fruits';
import Zoom from '../utils/Zoom';

const Fruits = React.memo(() => {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [endedAudio, setEndedAudio] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = useCallback(
    (index: number) => {
      if (isPlaying && endedAudio === index) return;
      setEndedAudio(index);
      setIsPlaying(true);
      if (audioRefs.current[index]) {
        audioRefs.current[index].currentTime = 0;
        audioRefs.current[index].play();
      }
    },
    [isPlaying, endedAudio]
  );

  const handleEnd = useCallback(() => {
    setEndedAudio(null);
    setIsPlaying(false);
  }, []);

  return (
    <div className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[1000px]:gap-8 gap-16 p-2">
      {fruitImages.map((value, index) => (
        <div
          className="border-2 border-indigo-500 rounded flex flex-col justify-center items-center cursor-pointer relative"
          key={value.name}
          onClick={() => handleClick(index)}
          style={index === endedAudio ? { borderColor: '#FFB22C' } : undefined}
        >
          <div
            className="absolute top-2 right-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* lets not talk about this */}
            <Zoom>
              <div
                className="border-2 border-indigo-500 rounded flex flex-col justify-center items-center  bg-white scale-200"
                onClick={() => handleClick(index)}
                style={
                  index === endedAudio ? { borderColor: '#FFB22C' } : undefined
                }
              >
                <img
                  src={value.image}
                  className="w-44 max-[1000px]:w-25"
                  loading="eager"
                />
                <p
                  className="bg-indigo-500 w-full text-center text-white text-2xl font-mono px-10 max-[1000px]:text-base transition-all duration-300"
                  style={
                    index === endedAudio
                      ? { backgroundColor: '#FFB22C' }
                      : undefined
                  }
                >
                  {value.name}
                </p>
              </div>
            </Zoom>
          </div>

          <img
            src={value.image}
            className="w-44 max-[1000px]:w-25"
            alt={value.name}
            loading="eager"
          />
          <audio
            onEnded={handleEnd}
            ref={(element) => (audioRefs.current[index] = element)}
            preload="none"
          >
            <source
              src={value.sound}
              type="audio/mp3"
            />
          </audio>
          <p
            className="bg-indigo-500 w-full text-center text-white text-xl font-mono max-[1000px]:text-base transition-all duration-300"
            style={
              index === endedAudio ? { backgroundColor: '#FFB22C' } : undefined
            }
          >
            {value.name}
          </p>
        </div>
      ))}
    </div>
  );
});

export default Fruits;
