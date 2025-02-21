// src/components/MealPlanner.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MealPlanner.css';

const MealPlanner = () => {
  const [date, setDate] = useState(new Date());
  const [mealsByDate, setMealsByDate] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [newMeal, setNewMeal] = useState('');

  const mealTypes = {
    breakfast: { icon: '🌅', title: 'Breakfast', color: '#FF9F43' },
    lunch: { icon: '🌞', title: 'Lunch', color: '#28C76F' },
    dinner: { icon: '🌙', title: 'Dinner', color: '#7367F0' }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDateKey = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getMealsForDate = (date) => {
    const dateKey = getDateKey(date);
    return mealsByDate[dateKey] || {
      breakfast: [],
      lunch: [],
      dinner: []
    };
  };

  const handleAddMeal = (type) => {
    setSelectedMealType(type);
    setShowAddModal(true);
  };

  const handleSaveMeal = () => {
    if (!newMeal.trim()) return;

    const dateKey = getDateKey(date);
    const currentMeals = getMealsForDate(date);

    setMealsByDate(prev => ({
      ...prev,
      [dateKey]: {
        ...currentMeals,
        [selectedMealType]: [...currentMeals[selectedMealType], newMeal]
      }
    }));

    setNewMeal('');
    setShowAddModal(false);
  };

  const handleDeleteMeal = (type, index) => {
    const dateKey = getDateKey(date);
    const currentMeals = getMealsForDate(date);

    const updatedMeals = {
      ...currentMeals,
      [type]: currentMeals[type].filter((_, i) => i !== index)
    };

    setMealsByDate(prev => ({
      ...prev,
      [dateKey]: updatedMeals
    }));
  };

  return (
    <div className="meal-planner">
      <div className="meal-planner-header">
        <h1>Meal Planner</h1>
        <p>Plan your meals for {formatDate(date)}</p>
      </div>

      <div className="planner-content">
        <div className="calendar-section">
          <Calendar
            onChange={setDate}
            value={date}
            className="custom-calendar"
          />
        </div>

        <div className="meals-section">
          <div className="meal-cards">
            {Object.entries(mealTypes).map(([type, { icon, title, color }]) => {
              const mealsForDate = getMealsForDate(date);
              return (
                <div 
                  className="meal-card" 
                  key={type}
                  style={{ '--meal-color': color }}
                >
                  <div className="meal-card-header">
                    <span className="meal-icon">{icon}</span>
                    <h3>{title}</h3>
                  </div>
                  
                  <div className="meal-items">
                    {mealsForDate[type].length === 0 ? (
                      <p className="no-meals">No meals planned yet</p>
                    ) : (
                      <ul className="meal-list">
                        {mealsForDate[type].map((meal, index) => (
                          <li key={index} className="meal-item">
                            <span>{meal}</span>
                            <button 
                              className="delete-meal-btn"
                              onClick={() => handleDeleteMeal(type, index)}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button 
                    className="add-meal-btn"
                    onClick={() => handleAddMeal(type)}
                  >
                    <i className="fas fa-plus"></i> Add {title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add {mealTypes[selectedMealType].title}</h3>
            <input
              type="text"
              value={newMeal}
              onChange={(e) => setNewMeal(e.target.value)}
              placeholder="Enter meal name"
              autoFocus
            />
            <div className="modal-actions">
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
              <button onClick={handleSaveMeal} className="save-btn">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanner;

