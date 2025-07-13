import '../Css/RoundIndicator.css';

const RoundIndicator = ({ round }) => {

    return (
        <>
            <div className="round-indicator">
                <div className="round-number">
                    <h2>Round: {round} of 3</h2>
                    <p>Choose your favorite food option!</p>
                </div>
            </div>
        </>
    )
}

export default RoundIndicator;