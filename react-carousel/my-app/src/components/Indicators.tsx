import { FaRegCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';

type Props = {
  currentIndex: number;
  index: number;
  onIndicatorClick: (value: number) => void;
};

export function Indicators({ currentIndex, index, onIndicatorClick }: Props) {
  return (
    <div>
      {currentIndex === index ? (
        <FaCircle onClick={() => onIndicatorClick(index)} />
      ) : (
        <FaRegCircle onClick={() => onIndicatorClick(index)} />
      )}
    </div>
  );
}
