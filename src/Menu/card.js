import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { addItemToBag } from './helper/storing.js';
// import '../components/css/card.css';
const Card = ({
  product,
  title,
  img,
  time,
  summary,
  cuisines,
  dishTypes,
  instructions,
  analyzedInstructions,
}) => {
  const [redirect, setredirect] = useState(false);
  const startCooking = () => {
    addItemToBag(product, () => {
      setredirect(true);
    });
  };

  const getaRedirect = () => {
    console.log('GETTING REDIRECT TO BAG:)');
    if (redirect) {
      return <Redirect to="/startcooking" />;
    }
  };

  return (
    <React.Fragment>
      {getaRedirect()}
      <div
        className="card"
        onClick={() => {
          startCooking();
        }}
      >
        <img className="card-img-top" src={img} alt />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-text">Time : {time} min</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
