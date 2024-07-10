import { useEffect, useState } from 'react';
import { ImageBanner } from './ImageBanner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  images: CharacterProps[];
};

type CharacterProps = {
  src: string;
  alt: string;
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (currentIndex > images.length - 1) {
    setCurrentIndex(0);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  function handlePrevious() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function handleSelect(index: number) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="container lg border-2 border-white">
      <div className="flex items-center border-2 border-purple-500">
        <PrevButton onPrevClick={handlePrevious} />
        {images.map((image, index) => (
          <ImageBanner
            key={image.alt + index}
            image={image}
            isActive={currentIndex === index}
          />
        ))}
        <NextButton onNextClick={handleNext} />
      </div>
      <div className="flex justify-center mt-2 border-2 border-red-500">
        {images.map((image, index) => (
          <Indicators
            key={image.alt + index}
            index={index}
            currentIndex={currentIndex}
            onIndicatorClick={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
