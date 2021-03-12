import React, { useState } from 'react';
import '../components/css/searchBar.css';
import { Link, Redirect } from 'react-router-dom';
import { getSerchedItem } from '../Menu/helper/ApiCalls.js';
import { addItemToCart } from '../Core/helper/SearchBarHelper';
const SearchBar = () => {
  const [values, setvalues] = useState({
    find: '',
    error: '',
    loading: false,
    didRedirect: false,
  });
  const { find, didRedirect, loading } = values;
  const additemToCart = () => {
    addItemToCart(find, () =>
      setvalues({
        ...values,
        find: '',
        error: '',
        loading: false,
        didRedirect: true,
      })
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false, loading: true });
    getSerchedItem(find)
      .then((response) => {
        if (response.error) {
          setvalues({ ...values, error: response.error, loading: false });
        } else {
          let pro = response;
          for (let index = 0; index < pro.products.length; index++) {
            console.log('RESPONSE', pro.products[index]);
          }

          // console.log('RESPONSE ', response);
          setvalues({
            ...values,
            find: '',
            error: '',
            loading: false,
            didRedirect: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const performRedirect = () => {
    // console.log('Doing re direct');
    // console.log(history.location.pathname);
    if (didRedirect) {
      console.log('Doing re direct');
      return <Redirect to="/recipes/searchedrecipes" />;
    }
  };
  const handelChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };
  const searchBarForm = () => {
    return (
      <div className="input-group">
        <input
          onChange={handelChange('find')}
          value={find}
          type="text"
          className="formControl"
          placeholder="Search..."
        />
        <div className="input-group-append">
          <button onClick={onSubmit} className="button" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      {searchBarForm()}
      {performRedirect()}
    </div>
  );
};

export default SearchBar;
