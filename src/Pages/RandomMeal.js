import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RandomMeal = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    mealId: '',
    strMeal: '',
    drinkAlternate: '',
    area: '',
    instructions: '',
    category: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
        setCategories(data.categories || data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Random Meal Generator</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="mealId" className="form-label">Meal ID</label>
            <input
              type="text"
              className="form-control"
              id="mealId"
              name="mealId"
              value={formData.mealId}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="strMeal" className="form-label">Meal</label>
            <input
              type="text"
              className="form-control"
              id="strMeal"
              name="strMeal"
              value={formData.strMeal}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="drinkAlternate" className="form-label">Drink Alternate</label>
          <input
            type="text"
            className="form-control"
            id="drinkAlternate"
            name="drinkAlternate"
            value={formData.drinkAlternate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">Area</label>
          <input
            type="text"
            className="form-control"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions</label>
          <input
            type="text"
            className="form-control"
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="0">---Select Category---</option>
            {categories.map((category) => (
              <option key={category.idCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Generate</button>
      </form>
    </div>
  );
};

export default RandomMeal;
