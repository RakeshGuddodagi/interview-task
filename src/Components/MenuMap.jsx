import React, { useState } from 'react';
import "../styles/MenuWithMap.css"
function MenuWithMap() {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <div id="menu">
        <button onClick={toggleMap}>Show Map</button>
      </div>
      {showMap && (
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="400"
            title="Embedded Map"
          />
        </div>
      )}
    </div>
  );
}

export default MenuWithMap;