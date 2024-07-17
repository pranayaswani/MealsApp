import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MealsContext } from './MealsContext';

const CategoryDetails = () => {
  const { id } = useParams(); 
  const { meals, setMeals, favorites, updateFavorites } = useContext(MealsContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
        const data = await response.json();
        
        const updatedMeals = data.meals.map((meal) => {
          const isFavorite = favorites.some(fav => fav.idMeal === meal.idMeal);
          return {
            ...meal,
            isSelected: isFavorite,
          };
        });

        setMeals(updatedMeals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, setMeals, favorites]); 

  const handleMealSelection = (meal) => {
    updateFavorites(meal);
    setMeals((prevMeals) =>
      prevMeals.map((m) =>
        m.idMeal === meal.idMeal ? { ...m, isSelected: !m.isSelected } : m
      )
    );
  };

  return (
    <div className="container">
      <h1>{id} Category</h1>
      {isLoading ? (
        <p>Loading meals...</p>
      ) : (
        <div className="row">
          {meals.map((meal) => (
            <div className="col-md-4 mb-4" key={meal.idMeal}>
              <div className="card">
                <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                  <button
                    className={`btn ${meal.isSelected ? 'btn-danger' : 'btn-primary'}`}
                    onClick={() => handleMealSelection(meal)}
                  >
                    {meal.isSelected ? 'Remove from Favorite' : 'Add to Favorite'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;
