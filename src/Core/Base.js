import React from 'react';
import Menu from '../Core/Menu';
const Base = ({ description, className, children }) => {
  return (
    <div>
      <Menu></Menu>
      <div className="content">
        <div className="container-fulid">
          <div className="jumbotron  text-white text-center">
            <p className="lead">{description}</p>
          </div>
          <div className={className}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Base;
