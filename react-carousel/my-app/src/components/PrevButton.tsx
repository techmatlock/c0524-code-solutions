import { FaAngleLeft } from 'react-icons/fa';

type Props = {
  onPrevClick: () => void;
};

export function PrevButton({ onPrevClick }: Props) {
  return <FaAngleLeft className="text-5xl" onClick={onPrevClick} />;
}
