import "../Css/FoodCard.css";

function FoodCard( {food, onFoodSelect, wasSelected, handleUnselectedFood} ) {




    return (
        <>
        <div 
            className={`food-card-container ${wasSelected ? 'selected' : 'not-selected'}`}
            onClick={() => onFoodSelect(food)}
            >
            <h1>Food Card</h1>
            <h2>{food.name}</h2>
            <h2>{food.category}</h2>
        </div>
        </>
    )
}

export default FoodCard;