import React, { useState } from 'react'
import Food from './data/Food'
import FoodCard from './components/FoodCard'
import './App.css'

function App() {

  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodSelect = (selectedFood) => {
    setSelectedFood(selectedFood.id);
    console.log("Selected food:", selectedFood.name);
  }

  return (
    <>
      <h1>Welcome to My App</h1>
      <p> This is a simple React application called Food Finder.</p>
      <p>It allows you to search for food items by name or category.</p>
      <p>Here are some of the choices for food:</p>
      <div className="food-list">
        <FoodCard 
          key={Food[0].id}
          food = {Food[0]} 
          onFoodSelect = {handleFoodSelect}
          wasSelected = {selectedFood === Food[0].id}
        />
        <FoodCard 
          key={Food[1].id}
          food = {Food[1]} 
          onFoodSelect = {handleFoodSelect}
          wasSelected = {selectedFood === Food[1].id}
        />
        <FoodCard 
          key={Food[2].id}
          food = {Food[2]} 
          onFoodSelect = {handleFoodSelect}
          wasSelected = {selectedFood === Food[2].id}
        />
      </div>
    </>
  )
}

export default App
