const pageTitle = document.querySelector("#page-title");
const diceRoll = document.querySelector("#dice-roll");
const pageScore = document.querySelector("#score");
const diceResult = document.querySelector("#dice-result");


let playerScore = 0;
pageTitle.textContent = "Begin game when 'roll' is clicked";
pageScore.textContent = playerScore;


diceRoll.addEventListener("click", () => {

    const diceRoll = Math.floor(Math.random() * 7);

    diceResult.textContent = diceRoll;
    pageTitle.textContent = "The score sums up as you roll";

    if (diceRoll === 1) {
        // player loses
        pageTitle.textContent = "You hit 1, you lose!";
    } else {
        // Update pl
        playerScore += diceRoll;
        pageScore.textContent = playerScore;
    }
    console.log('playerScore',playerScore);
});