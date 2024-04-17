// Modal.js
import React from 'react';
import { Link } from 'react-router-dom';

function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div id="modal-background" onClick={handleBackgroundClick} className="z-40 fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <p className="text-center mb-4 font-bold text-black">If you wish to log out, please use the log out button.</p>
        <div className="flex justify-evenly">
          <Link to='/login' onClick={onConfirm} className="px-6 py-2 rounded bg-[#0f1b39] text-white hover:bg-blue-700">Yes</Link>
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-700">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
