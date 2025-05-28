import React from 'react';
import Overview from './DashboardOverview';
import AnatomySection from './Anatomysection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { FiSearch } from 'react-icons/fi';

function DashboardMain() {
  return (
    <main className="dashboard-main">
       
      <div className="section-search-bar">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <section className="top-row">
        <Overview />
        <div className="right-section">
          <AnatomySection />
          <HealthStatusCards />
        </div>
      </section>
      <section className="bottom-row">
        <CalendarView />
        <UpcomingSchedule />
      </section>
      <section className="activity-section">
        <ActivityFeed />
      </section>
    </main>
  );
}

export default DashboardMain;

