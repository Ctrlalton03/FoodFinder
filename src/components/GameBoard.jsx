import { use, useEffect, useState } from 'react'
import { Shuffle } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Food from '../data/Food'
import FoodCard from '../components/FoodCard'
import RoundIndicator from '../components/RoundIndicator'


const GameBoard =({ round, foods, onFoodSelected, onShuffle }) => {
    
        useEffect(() => {
          AOS.init({ duration: 800, once: true });
        }, []);
      


    const [selectedFood, setSelectedFood] = useState(null);
    const [shownFood, setShownFood] = useState(foods);
    const [isShuffled, setIsShuffled] = useState(false);

  useEffect(() => {
        setShownFood(foods);
        setSelectedFood(null);
    }, [foods]);

    


    const handleFoodSelect = (selectedFood) => {
        setSelectedFood(selectedFood.id);
        console.log("Selected food:", selectedFood.name);

        setTimeout(() => {
            onFoodSelected(selectedFood);
        }, 300);

    }





    return(
        <>
        <div  data-aos="fade-up" className="food-list ">
            <div>
                {shownFood.map((food, index) => (
                    <FoodCard 
                        key={index} 
                        food={food} 
                        data-aos-delay={index * 100}
                        onFoodSelect={handleFoodSelect} 
                        wasSelected={selectedFood === food.id}
                    />
                ))}
            </div>
            <button 
                className="shuffle-button"
                onClick={onShuffle}
                disabled={isShuffled}
            >
                {isShuffled ? 'Shuffling...' : "Shuffle Food"} 
            </button>

        </div>
        <RoundIndicator round={round} />
        </>
    )
}

export default GameBoard;