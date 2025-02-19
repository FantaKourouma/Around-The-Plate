// src/components/MealPlanner.jsx
import React, { useState } from "react";

const MealPlanner = () => {
  const [mealPlans, setMealPlans] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  const handleAddMeal = (day, recipeName) => {
    setMealPlans((prevPlans) => ({
      ...prevPlans,
      [day]: [...prevPlans[day], recipeName],
    }));
  };

  return (
    <div className="container p-5 bg-light rounded my-5">
      <h2 className="text-center mb-5 text-dark">Weekly Meal Planner</h2>
      <div className="row justify-content-center">
        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
          <div className="col-md-2 text-center mb-3" key={day}>
            <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
            <div className="meal-plan-container">
              <div className="meal-plan" style={{ border: "2px solid #000", padding: "10px" }}>
                {mealPlans[day].map((recipe, index) => <p key={index}>{recipe}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-center mt-5 text-dark">Add Recipe to Meal Plan</h3>
      <form
        id="meal-plan-form"
        className="p-4"
        onSubmit={(e) => {
          e.preventDefault();
          const day = e.target.elements["day-select"].value;
          const recipeName = e.target.elements["recipe-name"].value;
          handleAddMeal(day, recipeName);
          e.target.reset();
        }}
      >
        <div className="mb-3">
          <label htmlFor="day-select" className="form-label">
            Select Day
          </label>
          <select className="form-select" id="day-select">
            {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
              <option value={day} key={day}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="recipe-name" className="form-label">
            Recipe Name
          </label>
          <input type="text" className="form-control" id="recipe-name" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Add to Meal Plan
        </button>
      </form>
    </div>
  );
};

export default MealPlanner;

