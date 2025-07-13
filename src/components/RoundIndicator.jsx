import '../Css/RoundIndicator.css';

const RoundIndicator = ({ round }) => {

    return (
        <>
            <div className="round-indicator">
                <div className="round-number">
                    <h2>Round: {round} of 3</h2>
                </div>
            </div>
        </>
    )
}

export default RoundIndicator;