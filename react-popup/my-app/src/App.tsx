import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './components/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const button = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={button} onClick={() => setIsOpen(true)}>
        Pop up!
      </button>
      <Popup
        position={button.current}
        isOpen={isOpen}
        opacity={0}
        onClose={() => setIsOpen(false)}>
        {isOpen && (
          <div className="menu-wrapper">
            <ul className="menu">
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
            </ul>
          </div>
        )}
      </Popup>
    </>
  );
}

export default App;
