import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../components/css/menu.css';
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    // console.log(history.location.pathname);
    return { color: '#6ac47e' };
  } else {
    return { color: 'black' };
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
          <Link
            style={currentTab(history, '/about')}
            className="nav-link"
            to="/"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, '/recipes')}
            className="nav-link"
            to="/recipes"
          >
            Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, '/downloads')}
            className="nav-link"
            to="/"
          >
            Download
          </Link>
        </li>
        <li className="nav-item mx-0">
          <Link
            style={currentTab(history, '/contact')}
            className="nav-link"
            to="/"
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, '/searchbar')}
            className="nav-link mx-0"
            to="/"
          >
            <SearchBar></SearchBar>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
