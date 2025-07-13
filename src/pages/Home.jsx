import { Link } from 'react-router-dom';
import '../Css/Home.css';
import MainImage from '../images/FoodFinderMainImage.png';
import StartScreen from '../components/StartScreen';


const Home = () => {
   
    return(
        <>
        <div className='home-container'>
            <section className='home-section-1'>
            <div className='main-image-container'>
                <img src={MainImage} alt="Delicious food" className="main-image" />
            </div>
            <div className='home-content'>
                <h1>FoodFinder</h1>
                <h3>Can't decide what to eat? Let us help!</h3>
                <p>Welcome to Food Finder, your go-to web app for discovering delicious food options!</p>
                <div className="foodfinder-description">
                    <p>Explore a wide variety of food choices and find your next meal with ease.</p>
                    <p>Play 3 Rounds to elimate options and discover the perfect meal your in the mood for!</p>
                </div>
            </div>
            </section>
           <StartScreen />
            <div className='button-container'>
                <button><Link to="/game">Start Game</Link></button>
            </div>
        </div>
        </>
    )
}

export default Home;