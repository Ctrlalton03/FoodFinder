import "../Css/Home.css";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const StartScreen = () => {

     useEffect(() => {
            AOS.init({ duration: 800, once: true });
        }, []);


    return(
        <>
        <section data-aos="fade-up" className='home-section-2'>
                <div>
                    <h2>How the Game Works</h2>
                    <div className="game-rules">
                        <p>Round 1: Mixed Food Battle</p>
                        <ul>
                            <li>You'll be shown a random selecton of food types like Pizza, Salad, Fried Chicken, Dumplings, Tacos</li>
                            <li>You'll click/tap the food you want out of the 3 choices </li>
                        </ul>    
                    </div>
                    <div className="game-rules">
                        <p>Round 2: Shuffle and Eliminate Again</p>
                        <ul>
                            <li>We mix it up again with 2 different foods and the last option u picked</li>
                            <li>Now you pick your new favorite choice out of the 3 options </li>
                        </ul>   
                    </div>
                    <div className="game-rules">
                        <p>Final Round: Final Pick</p>
                        <ul>
                            <li>We take the last option and shuffle them with a new food</li>
                            <li>You pick your final choice out of the 3 options</li>
                            <li>Based on the winning food type, the app uses your location to suggest restaurants or food spots nearby that serve that item.</li>
                        </ul>
                    </div>
                    <p>And that's it! You have your food choice for the day!</p>
                </div>

            </section>
        </>
    )
}

export default StartScreen;