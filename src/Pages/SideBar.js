import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import './SideBar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />} 
      </button>
      <nav className="nav-links">
        <Link to="/menu">Menu</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/randommeal">Random Meal</Link>
        <Link to="/aboutme">About Me</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
