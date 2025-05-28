import React from 'react';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <p>3 appointments on this week</p>
      <div className="bars-container">
        <div className="bar" style={{ height: '50px' }}></div>
        <div className="bar" style={{ height: '80px' }}></div>
        <div className="bar" style={{ height: '30px' }}></div>
        <div className="bar" style={{ height: '70px' }}></div>
        <div className="bar" style={{ height: '60px' }}></div>
      </div>
    </div>
  );
}

export default ActivityFeed;

