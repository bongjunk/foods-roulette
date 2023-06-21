import React, { useEffect, useState } from 'react';
import { data } from './_data/data';
import { Wheel } from 'react-custom-roulette';

export default function App() {
  const [mustSpin, setMustSpun] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpun(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      !mustSpin && prizeNumber
        ? alert(`추첨결과는 ${data[prizeNumber]?.option} 입니다!`)
        : null;
    }, 500);
  }, [!mustSpin]);

  return (
    <>
      <article className="flex justify-center text-center">
        <div>
          <p>점심메뉴 선정 v0.1.0</p>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
            spinDuration={0.5}
            onStopSpinning={() => {
              setMustSpun(false);
            }}
          />
          <button
            onClick={() => handleSpinClick()}
            className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            돌리기
          </button>
          <p>
            {!mustSpin && prizeNumber
              ? `오늘의 점심메뉴는 ${data[prizeNumber]?.option} 당첨!`
              : '오늘의 점심'}
          </p>
        </div>
      </article>
    </>
  );
}
