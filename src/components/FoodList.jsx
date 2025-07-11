
import React from 'react';
import Food from '../data/Food'; 


// This component displays a list of food items
// It maps through the Food array and displays each food item with its name and category
function FoodList({ food }) {
    

    return (
        <>
            <h1>Food List</h1>
            <ul>
                {Food.map(food =>(
                    // Each food item is displayed in a div with its name and category
                    // The key prop is used to uniquely identify each item in the list
                    <div key={food.id} className="food-item">
                        <h2>{food.name}</h2>
                        <p>{food.category}</p>
                    </div>
                ))}
            </ul>
            
        </>
    )
}

export default FoodList;