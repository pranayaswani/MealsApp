import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  }

  const handleFavouritesClick = () => {
    navigate('/favourites');
  }

  const handleRandomMealsClick = () => {
    navigate('/randommeal');
  }

  return (
    <div className="d-flex">
      <div className="container mt-4">
        <div className="jumbotron text-center bg-primary text-white">
          <h1 className="display-4">Welcome to Meal Explorer</h1>
          <p className="lead">Discover delicious meals, manage your favourites, and get random meal suggestions!</p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Menu</h5>
                <p className="card-text">Browse through a variety of meal categories.</p>
                <button className="btn btn-primary" onClick={handleMenuClick}>Go to Menu</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Favourites</h5>
                <p className="card-text">Check out your favourite meals.</p>
                <button className="btn btn-danger" onClick={handleFavouritesClick}>Go to Favourites</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Random Meal</h5>
                <p className="card-text">Get a surprise meal suggestion.</p>
                <button className="btn btn-success" onClick={handleRandomMealsClick}>Get Random Meal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
