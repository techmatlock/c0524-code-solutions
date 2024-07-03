import './Toggle.css';
import { useState } from 'react';

export function Toggle() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  const toggleClass = toggle ? 'on' : 'off';

  return (
    <>
      <div className="row">
        <div className="column-half justify-center align-center">
          <div
            onClick={handleToggle}
            className={`toggle-switch ${toggleClass}`}>
            <div className={`switch ${toggleClass}`}></div>
          </div>
        </div>
        <div className="column-half justify-center align-center left-margin">
          <p className="label">{toggle ? 'On' : 'Off'}</p>
        </div>
      </div>
    </>
  );
}
