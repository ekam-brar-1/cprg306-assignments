import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();

    if (data.meals) {
      setMeals(data.meals);
      console.log(meals);
    } else {
      setMeals([]);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [ingredient]);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="max-w-xs w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition-all duration-300"
          >
            <img
              className="w-full h-40 object-cover"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {meal.strMeal}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full text-center text-gray-600">
          <p>No meals found for this ingredient.</p>
        </div>
      )}
    </div>
  );
}
