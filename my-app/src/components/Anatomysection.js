import React from 'react';
import { anatomyIndicators } from '../data/anatomyData';

function AnatomySection() {
  return (
    
    <div className="anatomy-section">
      
      <h4>Human Body</h4>
      
      <div className="human-body-image-container">
        <img src="https://static.vecteezy.com/system/resources/previews/051/554/965/non_2x/human-anatomy-model-muscles-veins-png.png" alt="Human Body" width="200px" height="300px" className="human-body-img" />
        {anatomyIndicators.map((ind) => (
          <div
            key={ind.id}
            className={`indicator ${ind.status}`}
            style={{ top: ind.position.top, left: ind.position.left, position: 'absolute' }}
            title={ind.label}
          >
            {ind.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;

