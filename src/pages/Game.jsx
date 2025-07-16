import '../Css/GamePage.css';
import { useState } from 'react';
import { getRandomFood, advanceRound } from '../utils/gameLogic';
import Food from '../data/Food.js';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GameBoard from "../components/GameBoard";
import { useGeolocation } from '../hooks/useGeolocation.js';

// Main Game component
const Game = () => {
    // Custom hook for geolocation
    const { location, locationError, loading, getCurrentLocation } = useGeolocation();

    // Log location status for debugging
    console.log({ location, locationError, loading });

    // Main game state: round, current food options, winner, and completion status
    const [gameState, setGameState] = useState({
        round: 1,
        currentFoods: getRandomFood(Food, 3), // Start with 3 random foods
        winner: null,
        gameCompleted: false,
    });

    // Called when a food is selected; advances the round or ends the game
    const handleFoodSelected = (selectedFood) => {
        const newGameState = advanceRound(selectedFood, Food, gameState.round);
        setGameState(newGameState);

        if (newGameState.gameCompleted) {
            console.log("Game completed with winner:", selectedFood.name);
        }
    };

    // Shuffle button handler: picks 3 new random foods from all foods
    const handleShuffle = () => {
        setGameState((prev) => ({
            ...prev,
            currentFoods: getRandomFood(Food, 3)
        }));
    };

    // Initialize AOS animations on mount
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
        <div>
            <div data-aos="fade-up" className='game-page-container'>
                <h1>Game Mode</h1>
                
                {/* Location Status */}
                <div className="location-status">
                    {loading && <p>Getting your location...</p>}
                    {locationError && (
                        <div className="location-error">
                            <p>Location Error: {locationError}</p>
                            <button onClick={getCurrentLocation}>Retry Location</button>
                        </div>
                    )}
                    {location && (
                        <p>Location found! We'll suggest nearby restaurants when you complete the game.</p>
                    )}
                </div>

                {/* Game Over Screen */}
                {gameState.gameCompleted ? (
                    <div className="game-completed">
                        <h2>Congratulations! You have selected your food!</h2>
                        <p>Selected Food: {gameState.winner?.name}</p> 
                        <img src={gameState.winner?.photo} alt={gameState.winner?.name} className="winner-image" />
                        <p>We will now suggest restaurants or food spots nearby that serve {gameState.winner.name}.</p>
                        {/* Restart button resets the game state */}
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
                    // Main game board: shows food cards and handles selection/shuffling
                    <GameBoard
                        round={gameState.round}
                        foods={gameState.currentFoods}
                        onFoodSelected={handleFoodSelected}
                        onShuffle={handleShuffle}
                    />
                )}    
            </div>
        </div>
        </>
    )
}

export default Game;

