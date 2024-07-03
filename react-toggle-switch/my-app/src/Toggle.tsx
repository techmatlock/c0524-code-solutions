import './Toggle.css';
import { useState } from 'react';

export function Toggle() {
  const [toggle, setToggle] = useState('off');

  function handleToggle() {
    if (toggle === 'off') {
      setToggle('on');
    } else {
      setToggle('off');
    }
  }

  return (
    <>
      <div className="row">
        <div className="column-half justify-center align-center">
          <div onClick={handleToggle} className={`toggle-switch ${toggle}`}>
            <div className={`switch ${toggle}`}></div>
          </div>
        </div>
        <div className="column-half justify-center align-center left-margin">
          <p className="label">{toggle === 'off' ? 'Off' : 'On'}</p>
        </div>
      </div>
    </>
  );
}
