import React from 'react';
// import '../components/css/card.css';
const Card = ({ title, img, time }) => {
  return (
    <div className="card" onClick={() => {}}>
      <img className="card-img-top" src={img} alt />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-text">Time : {time} min</h5>
      </div>
    </div>
  );
};

export default Card;
