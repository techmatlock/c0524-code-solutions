import { useState } from 'react';
import { Modal } from '../components/Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function showModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteModal() {
    alert('X was deleted!');
    setIsOpen(false);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={showModal}>Delete Me!</button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <p>Do you really want to delete?</p>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={deleteModal}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
