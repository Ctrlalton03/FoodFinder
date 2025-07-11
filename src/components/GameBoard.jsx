import { useState } from 'react'
import Food from '../data/Food'
import FoodCard from '../Components/FoodCard'


const GameBoard =() => {
    const [selectedFood, setSelectedFood] = useState(null);

    const handleFoodSelect = (selectedFood) => {
        setSelectedFood(selectedFood.id);
        console.log("Selected food:", selectedFood.name);

    }


    return(
        <>
        <h2>Game Board</h2>
        <p>Welcome to the Food Finder Game Board!</p>
        <p>Here you can explore various food items.</p>
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
        </div>
        </>
    )
}

export default GameBoard;