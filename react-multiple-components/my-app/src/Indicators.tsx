import { Button } from './Button';

type Props = {
  items: string[];
  onClick: (index: number) => void;
  currentIndex: number;
};

export function Indicators({ items, onClick, currentIndex }: Props) {
  return (
    <div className="flex justify-center m-1">
      {items.map((item, index) => (
        <Button
          key={item + index}
          text={String(index)}
          onClick={() => onClick(index)}
          backgroundColor={currentIndex === index ? 'blue' : 'black'}
        />
      ))}
    </div>
  );
}
