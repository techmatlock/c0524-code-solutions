import { useState } from 'react';
import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const images = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonText = 'Click for Next Image';

export function App() {
  const [captionIndex, setCaptionIndex] = useState(0);

  function handleCaptionClick() {
    if (captionIndex >= captions.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer caption={images[captionIndex]} />
      <ImageCaption caption={captions[captionIndex]} />
      <ImageDescription caption={descriptions[captionIndex]} />
      <ButtonContainer
        onCaptionClick={handleCaptionClick}
        buttonText={buttonText}
      />
    </>
  );
}
