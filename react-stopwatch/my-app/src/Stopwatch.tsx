import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';

let playToggle = '';
let pauseToggle = 'hidden';
export function Stopwatch() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const handlePlay = () => {
    playToggle = 'hidden';
    pauseToggle = '';
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIntervalId(intervalId);
  };

  const handlePause = () => {
    playToggle = '';
    pauseToggle = 'hidden';
    clearInterval(intervalId);
  };

  function handleFace() {
    if (pauseToggle === '') {
      clearInterval(intervalId);
      setCount(0);
      playToggle = '';
      pauseToggle = 'hidden';
    }
  }

  return (
    <>
      <div
        onClick={handleFace}
        className="flex items-center justify-center circle w-72 h-72 border-2 border-purple-800 rounded-full">
        <div className="count text-2xl">{count}</div>
      </div>
      <div className="flex justify-center mt-4 text-2xl">
        <FaPlay onClick={handlePlay} className={`${playToggle}`} />
        <FaPause onClick={handlePause} className={`${pauseToggle}`} />
      </div>
    </>
  );
}
