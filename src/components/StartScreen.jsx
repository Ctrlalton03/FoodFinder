

const StartScreen = () => {

    return(
        <>
        <section className='home-section-2'>
                <div>
                    <h2>How the Game Works</h2>
                    <p>Round 1: Mixed Food Battle</p>
                    <ul>
                        <li>You'll be shown a random selecton of food types like Pizza, Salad, Fried Chicken, Dumplings, Tacos</li>
                        <li>You'll click/tap the food you want out of the 3 choices </li>
                    </ul>
                    <p>Round 2: Shuffle and Eliminate Again</p>
                    <ul>
                        <li>We mix it up again with 2 different foods and the last option u picked</li>
                        <li>Now you pick your new favorite choice out of the 3 options </li>
                    </ul>
                    <p>Final Round: Final Pick</p>
                    <ul>
                        <li>We take the last option and shuffle them with a new food</li>
                        <li>You pick your final choice out of the 3 options</li>
                    </ul>
                    <p>And that's it! You have your food choice for the day!</p>
                </div>

            </section>
        </>
    )
}

export default StartScreen;