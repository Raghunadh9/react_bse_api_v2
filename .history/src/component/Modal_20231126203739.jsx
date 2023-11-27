// src/Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg">
          {children}
          <button
            className=" bg-blue-500 text-white  rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
