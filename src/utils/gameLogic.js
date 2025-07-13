
export function getRandomFood(foodList, count = 3) {
    const shuffled = [...foodList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}



export function advanceRound(winner, allFoods, currentRound){

    const nextRound = currentRound + 1;

    if (nextRound > 3 ){
        return {
            round: nextRound,
            currentFoods: [],
            winner: winner,
            gameCompleted: true,
        };
    } else {

    const remainingFoods = allFoods.filter(food => food.id !== winner.id);
    const nextFoods = getRandomFood(remainingFoods, 2);
    const roundFoods = [winner, ...nextFoods];

    return{
        round: nextRound,
        currentFoods: roundFoods,
        winner: null,
        gameCompleted: false,
    }
    }
}