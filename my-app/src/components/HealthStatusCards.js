import React from 'react';
import { healthCards } from '../data/healthIndicators';

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map((card) => (
        <div key={card.id} className={`health-card ${card.status}`}>
          <h5>{card.name}</h5>
          <p>{card.date}</p>
          <div className="status-indicator"></div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;

