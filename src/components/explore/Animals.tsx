import { useRef } from "react";
import { AnimalVideoFiles } from "../../assets/animals";

const Animals = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.pause();
      videoRefs.current[index]!.currentTime = 0;
    }
  };

  return (
    <div className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[1000px]:gap-8 gap-16 p-2">
      {AnimalVideoFiles.map((value, index) => (
        <div
          className="border-2 border-indigo-500 rounded flex flex-col justify-center items-center cursor-pointer"
          key={index}
        >
          <video
            ref={(element) => (videoRefs.current[index] = element)}
            loop
            height={100}
            width={100}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <source src={value.path} type="video/mp4" />
          </video>
          <p className="bg-indigo-500 w-full text-center text-white text-xl font-mono max-[1000px]:text-base">{value.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Animals;
