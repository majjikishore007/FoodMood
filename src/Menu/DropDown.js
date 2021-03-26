import React, { useState } from 'react';
import '../components/css/Dropdown.css';
const DropDown = ({ title, children }) => {
  return (
    <li className="nav-item mx-0">
      <div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">{children}</div>
      </div>
    </li>
  );
};

export default DropDown;
