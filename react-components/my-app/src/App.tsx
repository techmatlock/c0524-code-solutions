import { useState } from 'react'
import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <ImageContainer />
    <ImageCaption />
    <ImageDescription />
    <ButtonContainer />
    </>
  )
}

export default App
