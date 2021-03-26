import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import CookingItem from './CookingItem';
import '../components/css/card.css';
const Card = ({
  product,
  title,
  img,
  time,
  calories,
  summary,
  cuisines,
  dishTypes,
  instructions,
  analyzedInstructions,
}) => {
  const [values, setValues] = useState({
    dispaly: false,
    loading: false,
    reload: false,
  });
  const { reload } = values;
  useEffect(() => {
    console.log('using effect');
    showItem();
  }, [reload]);

  const getCal = (calories) => {
    var cal = calories;
    return cal.toFixed(2);
  };

  const showItem = () => {
    return <CookingItem img={img}></CookingItem>;
  };
  const getReload = () => {
    console.log('getting realod');
    setValues({ ...values, reload: true });
  };
  return (
    <React.Fragment>
      <div
        className="card"
        onClick={() => {
          getReload();
        }}
      >
        <div className="img-hover-zoom">
          <img src={img} alt="This zooms-in really well and smooth" />
        </div>
        {/* <img className="card-img-top" src={img} /> */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {calories != null ? (
            <h5 className="card-text">Calories :{getCal(calories)}</h5>
          ) : (
            ''
          )}
          <h5 className="card-text">ReadyInMinutes : {time} min</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
