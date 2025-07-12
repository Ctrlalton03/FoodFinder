import { Link } from 'react-router-dom';
import '../Css/Home.css';
import MainImage from '../images/FoodFinderMainImage.png';


const Home = () => {
   
    return(
        <>
        <div className='home-container'>
            <div className='main-image-container'>
                <img src={MainImage} alt="Delicious food" className="main-image" />
            </div>
            <div className='home-content'>
                <h1>FoodFinder</h1>
                <p>Welcome to Food Finder, your go-to web app for discovering delicious food options!</p>
                <div className="foodfinder-description">
                    <p>Here, you can search for food items by name or category.</p>
                    <p>Explore a wide variety of food choices and find your next meal with ease.</p>
                    <p>Whether you're looking for a specific dish or just browsing, Food Finder has got you covered!</p>
                </div>
            </div>
            <div className='button-container'>
                <button><Link to="/game">Start Game</Link></button>
            </div>
        </div>
        </>
    )
}

export default Home;