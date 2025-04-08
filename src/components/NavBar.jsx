import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="flex-container">
        <div className="flex-container">
          <div className="menu-item disabled">All</div>
          <span className="divider"/>
          <div className="menu-item active">Photos</div>
          <span className="divider"/>
          <div className="menu-item disabled">Videos</div>
          <span className="divider"/>
          <div className="menu-item disabled">Albums</div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button className="filter">
            <span>Filter</span>
            <span>&#9662;</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
