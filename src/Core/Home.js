import React, { useState } from 'react';
import Base from './Base';
import mainImg from '../img/foodapp1.jpg'; //src\img\foodapp1.jpg
import '../components/css/image.css';
import { Link, Redirect } from 'react-router-dom';
const Home = () => {
  const [values, setvalues] = useState({
    started: false,
    menu: false,
  });
  const { started, menu } = values;
  const performRedirect = () => {
    if (started) {
      return <Redirect to="/home/gettingstarted" />;
    }
    if (menu) {
      return <Redirect to="/recipes" />;
    }
  };
  const onSubmit = (path) => {
    if (path == '/gettingstarted') {
      setvalues({ ...values, started: true });
    }
    if (path == '/menu') {
      setvalues({ ...values, menu: true });
    }
  };
  const home = () => {
    return (
      <Base>
        <div className="row">
          <div className="col-6">
            <div className="container-fluid">
              <h1>Let's Start </h1>
              <h1>Cooking with </h1>
              <h1>Popular Recipes</h1>

              <p className="subtitle">
                Want to learn cooking but confused how to start?
                <span>No need to worry again!</span>
              </p>

              <div className="button">
                <button
                  onClick={() => {
                    onSubmit('/gettingstarted');
                  }}
                  className="button1"
                >
                  GetStarted
                </button>
                <button
                  onClick={() => {
                    onSubmit('/menu');
                  }}
                  className="button2 "
                >
                  ExploreMenu
                </button>
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
    );
  };

  return (
    <div>
      {home()}

      {performRedirect()}
    </div>
  );
};

export default Home;
