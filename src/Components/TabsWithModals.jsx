import React from 'react';

const ModalComponent = ({ activeTab, closeModal }) => {
  if (!activeTab) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal {activeTab.replace('modal', '')} Content</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalComponent;