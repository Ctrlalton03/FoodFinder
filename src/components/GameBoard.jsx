import { useState } from 'react'
import Food from '../data/Food'
import FoodCard from '../Components/FoodCard'
import RoundIndicator from '../components/RoundIndicator'

const GameBoard =() => {
    const [selectedFood, setSelectedFood] = useState(null);

    const handleFoodSelect = (selectedFood) => {
        setSelectedFood(selectedFood.id);
        console.log("Selected food:", selectedFood.name);

    }




    return(
        <>
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
        <RoundIndicator round={1} />
        <p>Selected Food ID: {selectedFood}</p>
        <p>Selected Food Name: {selectedFood ? Food.find(food => food.id === selectedFood).name : 'None'}</p>
        <p>Click on a food item to select it.</p>
        </>
    )
}

export default GameBoard;