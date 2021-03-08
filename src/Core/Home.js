import React from 'react';
import Base from './Base';
import mainImg from '../img/foodapp1.jpg'; //src\img\foodapp1.jpg
import '../components/css/image.css';
const Home = () => {
  return (
    <div>
      <Base>
        <div className="row">
          <div className="col-6">
            <div class="container-fluid">
              <h1>Let's Start </h1>
              <h1>Cooking with </h1>
              <h1>Popular Recipes</h1>

              <p className="subtitle">
                Want to learn cooking but confused how to start?
                <span>No need to worry again!</span>
              </p>

              <div className="button">
                <button className="button1">GetStarted</button>
                <button className="button2 ">ExploreMenu</button>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <img className="image" src={mainImg} />
          </div>
        </div>

        <div class="containerfluid">
          <h1>Popular Food</h1>
          <h3>we provide a hign variety of recipes </h3>
        </div>
      </Base>
    </div>
  );
};

export default Home;
