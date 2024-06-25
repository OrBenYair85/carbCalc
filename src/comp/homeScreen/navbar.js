import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <div id="navbar">
      <ul className="container">
        <li className="nav-home">Home</li>
        <li className="nav-ms">My Sugar</li>
        <li className="nav-mly">My Last Meal</li>
        <li className="nav-ds">Day Summary</li>
        <li className="nav-fs">Food Search</li>
      </ul>
    </div>
  );
}

export default NavBar;