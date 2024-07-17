import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MealsContext } from './MealsContext';

const Favourites = () => {
  const { favorites, updateFavorites } = useContext(MealsContext);

  return (
    <div className="container">
      <h1>Favorites</h1>
      <div className="row">
        {favorites.map((meal) => (
          <div className="col-md-4 mb-4" key={meal.idMeal}>
            <div className="card">
              <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <button
                  className="btn btn-danger"
                  onClick={() => updateFavorites(meal)}
                >
                  Remove from Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
