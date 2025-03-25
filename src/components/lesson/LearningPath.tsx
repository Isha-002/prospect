import { NavLink } from "react-router";

const LearningPath = ({
  learn,
  image,
  path,
  styles,
}: {
  learn: string;
  image: string;
  path: string;
  styles?: React.CSSProperties;
}) => {
  return (
    <NavLink
      to={path}
      className="group cursor-pointer text-2xl text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg text-center px-18 py-8 hover:shadow-[0px_0px_12px_1px_rgba(234,_179,_8,_0.8)] duration-300 max-[1000px]:px-10 max-[1000px]:py-3 max-[1000px]:text-base"
      style={{ ...styles }}
    >
      <div className="flex flex-col justify-center items-center gap-1 w-full h-full select-none group-hover:scale-110 duration-300">
        <img src={image} className="w-36 max-[1000px]:w-20" />
        {learn}
      </div>
    </NavLink>
  );
};

export default LearningPath;
