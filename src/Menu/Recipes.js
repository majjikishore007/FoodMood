import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  search,
  searchByCuissines,
  searchByDesserts,
} from '../Menu/helper/EdmanApi';
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
  const [cuss, setCussines] = useState('South Indian');
  const [dess, setDesserts] = useState('Cakes');
  const [Items, setItems] = useState([]);
  const [values, setValues] = useState({
    searchfor: '',
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
    'Asian',
    'British',
    'Caribbean',
    '	Central Europe',
    'Chinese',
    'Eastern Europe',
    'French',
    'Indian',
    'Japanese',
    'Mexican',
  ];
  const Desserts = [
    'Biscuits and cookies',
    'Condiments and sauces',
    'Desserts',
    'Main course',
    'Pancake',
    'Egg',
    'Cereals',
    'Alcohol cocktail',
  ];
  const { isLoading, isError, searchfor } = values;
  useEffect(() => {
    getCall();
  }, [name, cuss, dess]);
  const getCall = () => {
    if (searchfor === 'R') {
      setProgress(0);
      setProgress(progress + 20);
      searchRecipes();
    } else if (searchfor === 'C') {
      setProgress(0);
      setProgress(progress + 20);
      searchCuissines();
    } else if (searchfor === 'D') {
      setProgress(0);
      setProgress(progress + 20);
      searchDesserts();
    } else {
      setProgress(0);
      setProgress(progress + 20);
      searchRecipes();
    }
  };

  const searchRecipes = () => {
    setValues({ ...values, isLoading: true });

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
  const searchCuissines = () => {
    setValues({ ...values, isLoading: true });
    // setProgress(progress + 20);
    setTimeout(() => {
      searchByCuissines(cuss).then((response) => {
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
  const searchDesserts = () => {
    setValues({ ...values, isLoading: true });
    // setProgress(progress + 20);
    setTimeout(() => {
      searchByDesserts(dess).then((response) => {
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
    setValues({ ...values, searchfor: 'R' });
    setName(e.target.value);
    console.log(name);
    // ref.current.continuousStart();
  };
  const handleChangeForCuissines = (e) => {
    console.log('VALUE', e.target.value);
    setCussines(e.target.value);
    setValues({ ...values, searchfor: 'C' });
    console.log(cuss);
  };
  const handleChangeForDesserts = (e) => {
    console.log('VALUE', e.target.value);
    setDesserts(e.target.value);
    setValues({ ...values, searchfor: 'D' });
    console.log(dess);
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
                  onClick={handleChangeForCuissines}
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
                  onClick={handleChangeForDesserts}
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
