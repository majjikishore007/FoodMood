import React from 'react';
import '../components/css/searchBar.css';
const SearchBar = () => {
  return (
    <div className="input-group">
      <input type="text" className="formControl" placeholder="Search..." />
      <div className="input-group-append">
        <button className="button" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
