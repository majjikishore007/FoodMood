import React, { useState, useEffect } from 'react';
import Base from '../Core/Base';
import { loadCart, cartEmpty } from '../Core/helper/SearchBarHelper';
import Card from '../Menu/card';
const Recipes = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadCart());
    cartEmpty(() => {
      console.log('did we got a crash');
    });
  }, []);

  return (
    <Base>
      <div className="container">
        <div className="row">
          {items.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card
                  //  product={product}
                  title={product.recipe.label}
                  time={product.recipe.totalTime}
                  img={product.recipe.image}
                  calories={product.recipe.calories}
                  // summary={product.summary}
                  // cuisines={[product.cuisines]}
                  // dishTypes={[product.dishTypes]}
                  // instructions={product.instructions}
                  // analyzedInstructions={[product.analyzedInstructions]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Recipes;
