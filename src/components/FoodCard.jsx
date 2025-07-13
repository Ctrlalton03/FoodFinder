import "../Css/FoodCard.css";

function FoodCard( {food, onFoodSelect, wasSelected} ) {




    return (
        <>
        <div 
        className={`food-card-container ${wasSelected ? 'selected' : 'not-selected'}`}
        onClick={() => onFoodSelect(food)}
            >
            <img src={food.photo} alt={food.name} className="food-image" />
            <h2>{food.name}</h2>
        </div>
        </>
    )
}

export default FoodCard;