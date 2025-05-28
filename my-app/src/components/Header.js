import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo-title">Healthcare</div>
      <div className="search-notify-profile">
        <div className="notifications">🔔</div>
        <div className="profile">
          <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" width="100px"height="200px" alt="User Avatar" />
          
        </div>
        <div className="add-btn">＋</div>
      </div>
    </header>
  );
}

export default Header;