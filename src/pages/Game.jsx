import '../Css/GamePage.css';
import { useState } from 'react';
import {getRandomFood, advanceRound} from '../utils/gameLogic';
import  Food  from '../data/Food.js';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GameBoard from "../components/GameBoard";

const Game = () =>{

    const [gameState, setGameState] = useState({
        round: 1,
        currentFoods: getRandomFood(Food, 3),
        winner: null,
        gameCompleted: false,
    });

    const handleFoodSelected = (selectedFood) => {
        const newGameState = advanceRound(selectedFood, Food, gameState.round);
        setGameState(newGameState);

        if (newGameState.gameCompleted){
            console.log("Game completed with winner:", selectedFood.name);
        }
    }

    const handleShuffle = () => {
        setGameState((prev) => ({
            ...prev,
            currentFoods: getRandomFood(Food, 3)
        }));
    };


    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);



    return(
        <>
        <div>
            <div data-aos="fade-up" className='game-page-container'>
                <h1>Game Mode</h1>
                {gameState.gameCompleted ? (
                    <div className="game-completed">
                        <h2>Congratulations! You have selected your food!</h2>
                        <p>Selected Food: {gameState.winner?.name}</p> 
                        <img src={gameState.winner?.photo} alt={gameState.winner?.name} className="winner-image" />
                        
                        <p>We will now suggest restaurants or food spots nearby that serve {gameState.winner.name}.</p>
                        
                        <button onClick={() => setGameState({
                            round: 1,
                            currentFoods: getRandomFood(Food, 3),
                            winner: null,
                            gameCompleted: false,
                        })}>
                            Start New Game
                        </button>
                    
                    </div>
                    ) : (
                        <GameBoard
                            round={gameState.round}
                            foods={gameState.currentFoods}
                            onFoodSelected={handleFoodSelected}
                            onShuffle={handleShuffle}
                        />)}    
            </div>
        </div>
        </>
    )
}


export default Game;

// This component can be expanded to include the game logic, UI, and any other necessary features for the FoodFinder game. 
// It currently serves as a placeholder to demonstrate the structure of the application.