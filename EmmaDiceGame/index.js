
/* 

    1. create a function that starts the game - "roll the dice"
    2. when "roll the dice" function is called - show dice on the screen
    3. when roll the dice function is called total the score in the function
    4. if the score passes 20 you win
    5. if the score is 1 you lose
    6. if the score is a win or loose restart the game
*/






let numberRolled; //declared outside function so can be used anywhere. things can be passed down the tree not up
let pointScored = 0;
// let currentScore;

const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6); //remove let - without the let
    console.log(`I am the numberRolled variable ${numberRolled}`)
}

const winOrLose = () => {
    // numberRolled = 2;  // if roll 1 they loose so starts at the next number 2 as you can't loose with 2
    // pointScored = 21;
    // updatePointScore() //can't have the function here
    if (numberRolled == 1) { //if roll 1 they loose
        console.log("Try again");
        pointScored = 0;
    } else if (pointScored >=20) {
        console.log("How did you win");
        pointScored = 0;
    } else {
        console.log("Carry on")
    }
    updatePointScore() 
}
// currentScore += diceRoll


const updatePointScore = () => { // addition function which could be used elsewhere
    diceRoll()
    pointScored += numberRolled; //thought it was diceRoll
    console.log(`My total is ${pointScored}`);
}



// console.log(numberRolled); //havent called function and got no value so will be undefined
// diceRoll();
// winOrLose();
// diceRoll();

// console.log(numberRolled);

// let numberRolled = Math.ceil(Math.random() * 6); //using ceil to get number between 1 and 6
// let rollFloor = Math.floor(Math.random() * 6);



