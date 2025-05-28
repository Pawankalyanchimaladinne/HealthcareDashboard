import React from 'react';
import { upcomingAppointments } from '../data/appointments';
import AppointmentCard from './SimpleAppointmentCard';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h4>The Upcoming Schedule</h4>
      <div className="schedule-list">
        <h5>On Thursday</h5>
        {upcomingAppointments.slice(0, 2).map((appt) => (
          <AppointmentCard key={appt.id} {...appt} />
        ))}
        <h5>On Saturday</h5>
        {upcomingAppointments.slice(2).map((appt) => (
          <AppointmentCard key={appt.id} {...appt} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;