import React, { useState } from 'react';
import '../components/css/searchBar.css';
import { Link, Redirect } from 'react-router-dom';
import { search } from '../Menu/helper/EdmanApi';
import LoadingBar from 'react-top-loading-bar';
import { addItemToCart } from '../Core/helper/SearchBarHelper';
const SearchBar = () => {
  const [progress, setProgress] = useState(0);
  const [values, setvalues] = useState({
    find: '',
    error: '',
    loading: false,
    didRedirect: false,
    submiting: false,
  });

  const { find, didRedirect, loading, submiting } = values;

  const searchRecipes = () => {
    setvalues({ ...values, loading: true });
    setProgress(progress + 40);
    setTimeout(() => {
      search(find)
        .then((response) => {
          if (response.error) {
            setvalues({ ...values, error: response.error, loading: false });
          } else {
            // console.log(response);
            addItemToCart(response, () => {
              setvalues({
                ...values,
                find: '',
                error: '',
                loading: false,
                didRedirect: true,
                submiting: true,
              });
            });
            setProgress(100);
            // console.log('RESPONSE ', response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchRecipes(find);
  };
  const performRedirect = () => {
    console.log('Doing re direct');
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
  const loadingMessage = () => {
    return (
      loading && (
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
  return (
    <div>
      {searchBarForm()}
      {loadingMessage()}
      {submiting && performRedirect()}
    </div>
  );
};

export default SearchBar;
