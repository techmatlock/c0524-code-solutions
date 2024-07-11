import { useState } from 'react';
import { Banner } from './Banner';
import { Button } from './Button';
import { Indicators } from './Indicators';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleSelect(index: number) {
    setCurrentIndex(index);
  }

  return (
    <>
      <Banner item={items[currentIndex]} />
      <Button text="Prev" onClick={handlePrevious} />
      <Indicators
        currentIndex={currentIndex}
        items={items}
        onClick={handleSelect}
      />
      <Button text="Next" onClick={handleNext} />
    </>
  );
}
