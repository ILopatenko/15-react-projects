import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useMyCustommHook } from './context';
const Modal = () => {
  const { isModalOpen, closeModal } = useMyCustommHook();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal container</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
