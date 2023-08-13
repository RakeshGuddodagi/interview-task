import React from 'react';
import "../styles/TabModal.css"
const TabComponent = ({ activeTab, onTabClick }) => {
  return (
    <div className="menu-container">
      <button
        className={activeTab === 'modal1' ? 'active' : ''}
        onClick={() => onTabClick('modal1')}
      >
        Open Modal 1
      </button>
      <button
        className={activeTab === 'modal2' ? 'active' : ''}
        onClick={() => onTabClick('modal2')}
      >
        Open Modal 2
      </button>
    </div>
  );
};

export default TabComponent;
