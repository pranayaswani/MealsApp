import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'; 

function Menu() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
        setCategories(data.categories || data); 
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Menu</h1>
      {isLoading ? (
        <p>Loading categories...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : categories.length > 0 ? (
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-4 mb-4" key={category.idCategory || category.strCategory}>
              <div className="card">
                <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory} />
                <div className="card-body">
                  <h5 className="card-title">{category.strCategory}</h5>
                  <p className="card-text">{category.strCategoryDescription}</p>
                  <Link to={`/categorydetail/${category.strCategory}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
}

export default Menu;
