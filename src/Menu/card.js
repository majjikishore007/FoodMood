import React from 'react';

const Card = ({ name }) => {
  return (
    <div className="card text-white bg-info  border border-info ">
      <div className="card-header lead">{name}</div>
      <div className="card-body">
        <p className="lead bg-success font-weight-normal text-wrap">
          getting started
        </p>
      </div>
    </div>
  );
};

export default Card;
