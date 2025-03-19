import { numbers } from '../../assets/numbers/numbers';

const ChooseUnit = ({
  units,
  lessonZero,
}: {
  units: number;
  lessonZero: boolean;
}) => {
  const totalUnits = lessonZero
    ? Array.from({ length: units }, (_, i) => i)
    : Array.from({ length: units }, (_, i) => i).slice(1);

  return (
    <section className='w-full h-full flex flex-col justify-center items-center'>
      <p className='font-semibold text-xl -mt-6 mb-8'>Select the dialogue from the lesson you want to study</p>
      <div className="grid grid-cols-3 max-[1000px]:grid-cols-3 max-[1000px]:gap-8 gap-14 cursor-pointer w-max">
        {totalUnits.map((v, i) => (
          <div
            className="bg-gradient-to-r from-emerald-300 to-amber-300 max-[1000px]:px-8 max-[1000px]:py-2 px-12 py-4 rounded-lg flex justify-center hover:shadow-[0px_0px_8px_1px_rgba(59,_130,_246,_0.5)] duration-300"
            key={i}
          >
            <img
              src={numbers[v]}
              className="w-34 max-[1000px]:w-18 hover:scale-90 duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUnit;
