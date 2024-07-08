import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';

export function Stopwatch() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIntervalId(intervalId);
  };

  const handlePause = () => {
    setIsPlaying(false);
    clearInterval(intervalId);
  };

  function handleFace() {
    setIsPlaying(false);
    clearInterval(intervalId);
    setCount(0);
  }

  return (
    <>
      <div
        onClick={handleFace}
        className={`flex items-center justify-center circle w-72 h-72 border-2 border-purple-800 rounded-full`}>
        <div className="count text-2xl">{count}</div>
      </div>
      <div className="flex justify-center mt-4 text-2xl">
        <FaPlay
          onClick={handlePlay}
          className={`${isPlaying ? 'hidden' : ''}`}
        />
        <FaPause
          onClick={handlePause}
          className={`${isPlaying ? '' : 'hidden'}`}
        />
      </div>
    </>
  );
}
