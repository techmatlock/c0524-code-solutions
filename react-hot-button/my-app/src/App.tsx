import { useState } from 'react';
import './App.css';
import { Button } from './ButtonComponent';

let color = '';

function App() {
  const [count, setCount] = useState(0);

  switch (true) {
    case count < 3:
      break;
    case count < 6:
      color = '#351D75'; // dark purple
      break;
    case count < 9:
      color = '#674EA7'; // light purple
      break;
    case count < 12:
      color = '#E06666'; // red
      break;
    case count < 15:
      color = '#F6B26B'; // orange
      break;
    case count < 18:
      color = '#FBFF00'; //yellow
      break;
    case count >= 18:
      color = '#FFFFFF'; // white
      break;
    default:
      color = '';
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button onButtonClick={handleClick} color={color} clicks={count} />
    </>
  );
}

export default App;
