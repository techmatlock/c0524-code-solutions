import { FaAngleRight } from 'react-icons/fa';

type Props = {
  onNextClick: () => void;
};

export function NextButton({ onNextClick }: Props) {
  return <FaAngleRight className="text-5xl" onClick={onNextClick} />;
}
