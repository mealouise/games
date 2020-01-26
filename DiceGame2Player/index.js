// logic first
//html&css
//1. create random number between 1 and 6

//html element declarations

const rollButton = document.getElementById("roll");
const diceImage = document.getElementById("diceImage");
//player 1
const playerScore = document.getElementById("playerScore");
const playerTotalScore = document.getElementById("playerTotalScore");
const playerStatus = document.getElementById("playerStatus");
const currentPlayer = document.getElementById("currentPlayer");

//player 2
const player2Score = document.getElementById("player2Score");
const player2TotalScore = document.getElementById("player2TotalScore");
const player2Status = document.getElementById("player2Status");

diceImage.style.visibility ="hidden";


let numberRolled;
let pointScored = 0;
let playerOneTurn = true;

// let currentScore;


//function declaration
const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6); //remove let
    console.log(`I am the numberRolled variable ${numberRolled}`)
}

const reset = () => {
    pointScored = 0;
    playerTotalScore.textContent = `Total score is ${pointScored}.`;
    numberRolled = null;
    diceImage.style.visibility ="hidden";
}

const winOrLose = () => {
    // numberRolled = 2;  // if roll 1 they loose so starts at the next number 2 as you can't loose with 2
    // pointScored = 25;
    // updatePointScore() //can't have the function here
    if (numberRolled == 1) { //if roll 1 they loose
        console.log("Try again");
        // pointScored = 0;
        playerStatus.textContent = "You lost!";
        reset();
    } else if (pointScored >=20) {
        console.log("How did you win");
        // pointScored = 0;
        playerStatus.textContent = "winner";
        reset();
    } else {
        console.log("Carry on")
        playerStatus.textContent = "Carry on";
    }
    // if (playerOneTurn) {
    //     console.log("Player One's Turn.");
    //     currentPlayer.textContent = "Player one";
    // } else {
    //     console.log("Player Two's Turn")
    //     currentPlayer.textContent = "Player two";
    // }
    updatePointScore() 
}
// currentScore += diceRoll
// diceRoll();

    const updatePointScore = () => { // addition function which could be used elsewhere
        // diceRoll()
        pointScored += numberRolled;
        // playerTotalScore.textContent = pointScored; //why isnt working?
         //thought it was diceRoll
        console.log(`My total is ${pointScored}`);
    }

    rollButton.addEventListener("click", () => {
        diceImage.style.visibility = "visible";
        diceRoll()
        winOrLose()
        diceImage.src = `img/dice${numberRolled}.png` //could have done an if statement. if was dice 'one' would have had to use an if statement
        // currentPlayer.textContent = 
        // if (currentPlayer === playerOneTurn){
        //     `Player is: 1`
        // } else {
        //     `Player is: 2`
        // }
        playerTotalScore.textContent = `Total score: ${pointScored}`
        playerScore.textContent = (`Number rolled: ${numberRolled || 0}`); // don't need to display current number
        // numberRolled.textContent = ("You have lost!")
        // pointScored.textContent= ("You have won!")

        // console.log("This button works")
    })
    // updatePointScore()
    // updatePointScore()
    // updatePointScore()



// console.log(numberRolled); //havent called function and got no value so will be undefined
// diceRoll();
// winOrLose();
// diceRoll();

// console.log(numberRolled);

// let numberRolled = Math.ceil(Math.random() * 6); //using ceil to get number between 1 and 6
// let rollFloor = Math.floor(Math.random() * 6);