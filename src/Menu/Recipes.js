import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../Menu/helper/EdmanApi';
import LoadingBar from 'react-top-loading-bar';
import Card from '../Menu/card.js';
import Dropdown from './DropDown';

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    // console.log(history.location.pathname);
    return { color: '#6ac47e' };
  } else {
    return { color: 'black' };
  }
};
const Recipes = ({ history }) => {
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState('chicken');
  const [Items, setItems] = useState([]);
  const [values, setValues] = useState({
    isLoading: false,
    isError: '',
  });
  const recipes = [
    'Mutton recipes',
    'Seafood recipes',
    'Biryani recipes',
    'Street food',
    'Paneer recipes',
  ];
  const cuisines = [
    'SouthIndian',
    'Pungabi',
    'Italian',
    'Rajastani',
    'Thai',
    'East indian',
  ];
  const Desserts = [
    'Cakes',
    'Cookies',
    'Ice cream',
    'Puddings',
    'Paneer recipes',
    'Cool cakes',
  ];
  useEffect(() => {
    searchRecipes(name);
  }, [name]);
  const { isLoading, isError } = values;
  const searchRecipes = () => {
    setValues({ ...values, isLoading: true });
    setProgress(progress + 30);
    setTimeout(() => {
      search(name).then((response) => {
        if (response.error) {
          console.log(response.error);
          setValues({ ...values, error: response.error, loading: false });
        } else {
          setValues({ ...values, error: '' });

          setItems(response.hits);
          setProgress(100);
        }
      });
    }, 2000);
  };

  const handleChange = (e) => {
    console.log('VALUE', e.target.value);
    setName(e.target.value);
    console.log(name);
    // ref.current.continuousStart();
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
          <Dropdown title="Recipes">
            {recipes.map((item, index) => {
              return (
                <button
                  name={item}
                  onClick={handleChange}
                  value={item}
                  key={index}
                  className="listbtn"
                >
                  {item}
                </button>
              );
            })}
          </Dropdown>
          <Dropdown title="Cuisines">
            {cuisines.map((item, index) => {
              return (
                <button
                  name={item}
                  onClick={handleChange}
                  value={item}
                  key={index}
                  className="listbtn"
                >
                  {item}
                </button>
              );
            })}
          </Dropdown>
          <Dropdown title="Desserts">
            {Desserts.map((item, index) => {
              return (
                <button
                  name={item}
                  onClick={handleChange}
                  value={item}
                  key={index}
                  className="listbtn"
                >
                  {item}
                </button>
              );
            })}
          </Dropdown>
        </ul>
      </div>
    );
  };
  const loadingMessage = () => {
    return (
      isLoading && (
        <div>
          <LoadingBar
            color="#6AC47E"
            height="8px"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <br />
        </div>
      )
    );
  };

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <React.Fragment>
      <div className="container">
        {loadMenuBar()}
        {loadingMessage()}
        <div className="row">
          {Items.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card
                  title={product.recipe.label}
                  time={product.recipe.totalTime}
                  img={product.recipe.image}
                  calories={product.recipe.calories}
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
