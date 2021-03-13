import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Base from '../Core/Base';
import { getRandom } from './helper/ApiCalls';
import '../components/css/Dropdown.css';
import Card from '../Menu/card.js';
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    // console.log(history.location.pathname);
    return { color: '#6ac47e' };
  } else {
    return { color: 'black' };
  }
};
const Recipes = ({ history }) => {
  const [Items, setItems] = useState([]);
  const [Values, setValues] = useState({
    error: '',
    loading: false,
  });
  const { error, loading } = Values;
  const loadRandomItems = () => {
    console.log('loaditems');
    getRandom()
      .then((response) => {
        if (response.error) {
          setValues({ ...Values, error: response.error });
          console.log(response.error);
        } else {
          setValues({ ...Values, loading: true });
          let data = response.recipes;
          setItems(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
  return (
    <React.Fragment>
      <div className="container">
        {loadMenuBar()}
        {!loading && loadRandomItems()}
        <div className="row">
          {Items.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card
                  product={product}
                  title={product.title}
                  time={product.readyInMinutes}
                  img={product.image}
                  summary={product.summary}
                  cuisines={[product.cuisines]}
                  dishTypes={[product.dishTypes]}
                  instructions={product.instructions}
                  analyzedInstructions={[product.analyzedInstructions]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recipes;
