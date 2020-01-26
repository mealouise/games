// logic first
//html&css
//1. create random number between 1 and 6

//html element declarations
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
const playerTotalScore = document.getElementById("playerTotalScore");
const playerStatus = document.getElementById("playerStatus");

const statOne = document.getElementById("statOne");
const statTwo = document.getElementById("statTwo");
const statThree = document.getElementById("statThree");
const statFour = document.getElementById("statFour");
const statFive = document.getElementById("statFive");
const statSix = document.getElementById("statSix");



diceImage.style.visibility ="hidden";


let numberRolled;
let pointScored = 0;
let oneRolled = 0;
let twoRolled = 0;
let threeRolled = 0;
let fourRolled = 0;
let fiveRolled = 0;
let sixRolled = 0;

// let currentScore;


//function declaration
const diceRoll = () => {
    // return random number between 1-6 and store as numberrolled
    numberRolled = Math.ceil(Math.random() * 6); //remove let
    console.log(`I am the numberRolled variable ${numberRolled}`)
}

const reset = () => {
    pointScored = 0;
    oneRolled = 0;
    twoRolled = 0;
    threeRolled = 0;
    fourRolled = 0;
    fiveRolled = 0;
    sixRolled = 0;
    statOne.textContent = `1's rolled: ${oneRolled}`;
    statTwo.textContent = `2's rolled: ${twoRolled}`;
    statThree.textContent = `3's rolled: ${threeRolled}`;
    statFour.textContent = `4's rolled: ${fourRolled}`;
    statFive.textContent = `5's rolled: ${fiveRolled}`;
    statSix.textContent = `6's rolled: ${sixRolled}`;
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
    updatePointScore()
    updateStats() 
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

    const updateStats = () => {
        if (numberRolled === 1) {
            oneRolled++
            statOne.textContent = `1's rolled: ${oneRolled}`;
        } if (numberRolled === 2) {
            twoRolled++
            statTwo.textContent = `2's rolled: ${twoRolled}`;
        } if (numberRolled === 3) {
            threeRolled++
            statThree.textContent = `3's rolled: ${threeRolled}`;
        } if (numberRolled === 4) {
            fourRolled++
            statFour.textContent = `4's rolled: ${fourRolled}`;
        } if (numberRolled === 5) {
            fiveRolled++
            statFive.textContent = `5's rolled: ${fiveRolled}`;
        } if (numberRolled === 6) {
            sixRolled++
            statSix.textContent = `6's rolled: ${sixRolled}`;
        }
    }









    rollButton.addEventListener("click", () => {
        diceRoll();
        winOrLose();

        if (numberRolled) {
            diceImage.style.visibility = "visible";
            diceImage.src = `img/dice${numberRolled}.png` //could have done an if statement. if was dice 'one' would have had to use an if statement    
        } else {
            diceImage.style.visibility = "hidden";
        }
       
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



