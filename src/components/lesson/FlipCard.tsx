export type Card = {
  back: string;
  inner: string;
  size: [number, number];
};

const FlipCard = ({ card }: { card: Card }) => {
  return (
    <div className="group bg-transparent w-[300px] h-[200px] perspective-[1000px]">
      <div className="relative w-full h-full text-center transition-transform duration-800 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <img
            src={card.inner}
            width={card.size[0]}
            height={card.size[1]}
          />
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={card.back}
            width={card.size[0]}
            height={card.size[1]}
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
