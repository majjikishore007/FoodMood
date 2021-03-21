import React, { useState, useEffect } from 'react';
import Base from '../Core/Base';

const CookingItem = ({ img }) => {
  return (
    <React.Fragment>
      <Base>
        <div className="container">
          <figure className="figure">
            <img className="figure-img img-fluid rounded" src={img} />
          </figure>
          <section>description</section>
        </div>
      </Base>
    </React.Fragment>
  );
};

export default CookingItem;
