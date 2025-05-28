import React from 'react';
import { navLinks } from '../data/navigationLinks';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      <nav>
        {navLinks.map((link) => (
          <div key={link.name} className="nav-link">
            <span className="icon">{link.icon}</span>
            <span className="name">{link.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
