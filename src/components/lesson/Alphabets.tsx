import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useState } from 'react';
import FlipCard from './FlipCard';
import { upperCaseArray } from '../../assets/alphabet/upper-case';
import {
  alphabetWords,
  lowerCaseArray,
} from '../../assets/alphabet/lower-case';

const Alphabets = () => {
  const [selected, setSelected] = useState(0);

  const back = () => {
    setSelected((selected) => Math.max(selected - 1, 0));
  };

  const next = () => {
    setSelected((selected) =>
      Math.min(selected + 1, lowerCaseArray.length - 1)
    );
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl h-[650px] max-[1000px]:h-[500px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="w-full h-full p-8 flex flex-col">
          <div className="flex-1 relative">
            <FlippingPages
              direction="right-to-left"
              onSwipeEnd={setSelected}
              selected={selected}
            >
              {lowerCaseArray.map((value, i) => (
                <div
                  key={value}
                  className="flex h-full gap-8 p-6"
                >
                  <div className="flex-1 flex items-center justify-center overflow-hidden">
                    <FlipCard
                      card={{ back: value, inner: upperCaseArray[i] }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-4 pr-8">
                    {Object.entries(alphabetWords)[i][1].map((word) => (
                      <div
                        key={word}
                        className="bg-blue-600 text-white font-medium font-persian max-[1000px]:text-lg text-2xl px-6 py-3 rounded-xl 
                                  transition-all hover:bg-blue-700 hover:scale-105 cursor-pointer
                                  shadow-md hover:shadow-lg text-center text-nowrap"
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </FlippingPages>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={back}
              disabled={selected === 0}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold
                        hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed
                        shadow-md hover:shadow-lg cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={next}
              disabled={selected === lowerCaseArray.length - 1}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold
                        hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed
                        shadow-md hover:shadow-lg cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabets;
