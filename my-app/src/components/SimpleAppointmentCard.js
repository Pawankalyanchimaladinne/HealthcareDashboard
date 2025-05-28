import React from 'react';

function AppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <h5>{title}</h5>
      <p>{time}</p>
    </div>
  );
}

export default AppointmentCard;

