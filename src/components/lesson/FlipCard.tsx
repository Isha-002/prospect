export type Card = {
  back: string;
  inner: string;
};

const FlipCard = ({ card }: { card: Card }) => {
  return (
    <div className="group bg-transparent w-[300px] h-[200px] perspective-[1000px]">
      <div className="relative w-full h-full text-center transition-transform duration-800 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <img
            src={card.inner}
            className="max-[1000px]:w-[200px] w-[400px]"
          />
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={card.back}
            className="max-[1000px]:w-[200px] w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
