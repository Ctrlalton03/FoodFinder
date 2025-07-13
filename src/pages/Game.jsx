import '../Css/GamePage.css';


import GameBoard from "../components/GameBoard";

const Game = () =>{

    return(
        <>
        <div>
            <div className='game-page-container'>
                <h1>FoodFinder</h1>
                <h2>Game Mode</h2>
                < GameBoard />   
            </div>
        </div>
        </>
    )
}

export default Game;

// This component can be expanded to include the game logic, UI, and any other necessary features for the FoodFinder game. 
// It currently serves as a placeholder to demonstrate the structure of the application.