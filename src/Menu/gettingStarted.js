import React, { useState } from 'react';
import Base from '../Core/Base';
import { getSuggestions } from './helper/ApiCalls.js';
import Card from './card.js';
const GettingStarted = () => {
  const [items, setItems] = useState([]);
  const [values, setValues] = useState({
    error: '',
    loaded: false,
  });
  const { error, loaded } = values;
  const loadSuggestions = () => {
    getSuggestions().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        console.log(data.error);
      } else {
        var items = data.results;

        setItems(items);
        setValues({ ...values, loaded: true });
        console.log(items);
      }
    });
  };
  return (
    <React.Fragment>
      <Base>
        {!loaded && loadSuggestions()}
        <div className="row">
          {items.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card name={product.title} />
              </div>
            );
          })}
        </div>
      </Base>
    </React.Fragment>
  );
};

export default GettingStarted;
