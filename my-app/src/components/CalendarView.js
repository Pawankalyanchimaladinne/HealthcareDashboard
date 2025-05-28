import React from 'react';
import { calendarDays } from '../data/calendarData';

function CalendarView() {
  return (
    <div className="calendar-container">
      <h3 className="calendar-title">October 2021</h3>
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <div key={index} className="day-cell">
            <div className="date">{day.date}</div>
            {day.appointments.length > 0 && (
              <div className="appointments">
                {day.appointments.map((time, i) => (
                  <div key={i} className="appointment-time">{time}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Appointment cards below calendar */}
      <div className="appointments-cards">
        <div className="appointment-card">
          <h4>Dentist</h4>
          <p>10:00 AM</p>
        </div>
        <div className="appointment-card">
          <h4>Physiotherapy</h4>
          <p>02:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;