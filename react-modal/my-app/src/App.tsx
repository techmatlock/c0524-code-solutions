import { useState } from 'react';
import { Modal } from '../components/Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function deleteModal() {
    alert('X was deleted!');
    setIsOpen(false);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <p>Do you really want to delete?</p>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={deleteModal}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
