import React, { createContext, useState, useEffect } from 'react';

export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites;
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const updateFavorites = (meal) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.idMeal === meal.idMeal);
      if (isAlreadyFavorite) {
        return prevFavorites.filter(fav => fav.idMeal !== meal.idMeal);
      } else {
        return [...prevFavorites, meal];
      }
    });
  };

  return (
    <MealsContext.Provider value={{ meals, setMeals, favorites, updateFavorites }}>
      {children}
    </MealsContext.Provider>
  );
};
