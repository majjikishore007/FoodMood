import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../components/menu.css';
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    console.log(history.location.pathname);
    return { color: '#50DBB4' };
  } else {
    return { color: 'white' };
  }
};
const Menu = ({ history }) => {
  return (
    <div>
      <ul className="nav">
        <li className="element2">
          <span className="element">
            Food <a className="e">Mood</a>
          </span>
        </li>
        <li className="nav-item ">
          <Link style={currentTab(history, '/')} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab(history, '/')} className="nav-link" to="/">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab(history, '/')} className="nav-link" to="/">
            Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab(history, '/')} className="nav-link" to="/">
            Download
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab(history, '/')} className="nav-link" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
