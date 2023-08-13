import React, { useState } from 'react';
import "../styles/TabWithCards.css"
const TabWithCards = () => {
  const tabData = [
    { title: 'Form Tab 1', color: '#FFFFFF' },
    { title: 'Text Tab 2', color: '#33FF57' },
    { title: 'Image Tab 3', color: '#5733FF' },
    {title:"Video Tab 4",color:'#005648'}
  ];

  const cardData = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    {title:"Card  4", content:'content for card 4'}
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container">
      <div className="tabs">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab === index ? 'active' : ''}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="card-container">
        <div
          className="card"
          style={{ backgroundColor: tabData[selectedTab].color }}
        >
          <h3>{cardData[selectedTab].title}</h3>
          <p>{cardData[selectedTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabWithCards;
