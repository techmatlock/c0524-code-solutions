import { useRef, useState } from 'react'
import './App.css'
import { Popup } from './components/Popup'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const button = useRef<HTMLButtonElement>(null);

  return (
    <>
    <button ref={button} onClick={() => setIsVisible(true)}>Pop up!</button>
    <p>Some text</p>
    <Popup positionTo={button.current} isVisible={isVisible}/>
    <p>Some text</p>
    </>
  )
}

export default App
