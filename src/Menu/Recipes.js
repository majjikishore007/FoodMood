import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Base from '../Core/Base';
import { getMenu } from './helper/ApiCalls';
import '../components/css/Dropdown.css';
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    // console.log(history.location.pathname);
    return { color: '#6ac47e' };
  } else {
    return { color: 'black' };
  }
};
const recipes = ({ history }) => {
  // const [Items, setItems] = useState([]);

  // const loadMenu = () => {};
  const loadMenuBar = () => {
    return (
      <div>
        <ul className="nav">
          <li className="element2">
            <span className="element">
              Food <a className="e">Mood</a>
            </span>
          </li>

          <li className="nav-item">
            <Link style={currentTab(history, '/')} className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mx-0">
            <div className="dropdown">
              <button className="dropbtn">Recipes</button>
              <div className="dropdown-content">
                <a href="#">Chicken recipes</a>
                <a href="#">Mutton recipes</a>
                <a href="#">Sea food recipes</a>
                <a href="#">Birayani recipes</a>
                <a href="#">Street food</a>
                <a href="#">Paneer recipes</a>
              </div>
            </div>
          </li>
          <li className="nav-item mx-0">
            <div className="dropdown">
              <button className="dropbtn">Cuisines</button>
              <div className="dropdown-content">
                <a href="#">SouthIndian</a>
                <a href="#">Pungabi</a>
                <a href="#">Italian</a>
                <a href="#">Rajastani</a>
                <a href="#">Thai</a>
                <a href="#">East indian</a>
              </div>
            </div>
          </li>
          <li className="nav-item mx-0">
            <div className="dropdown">
              <button className="dropbtn">Desserts</button>
              <div className="dropdown-content">
                <a href="#">Cakes</a>
                <a href="#">Cookies</a>
                <a href="#">Ice cream</a>
                <a href="#">Puddings</a>
                <a href="#">Cool cakes</a>
                {/* <a href="#">Link 6</a> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  return <div>{loadMenuBar()}</div>;
};

export default recipes;
