//team 1

const timer = document.getElementById("timer");
const tryButton1 = document.getElementById("try1");
const conversionButton1 = document.getElementById("conversion1");
const penaltyButton1 = document.getElementById("penalty1");
const dropGoalButton1 = document.getElementById("dropgoal1")
const team1TotalScore = document.getElementById("team1TotalScore");

//team 2
const tryButton2 = document.getElementById("try2");
const conversionButton2 = document.getElementById("conversion2");
const penaltyButton2 = document.getElementById("penalty2");
const dropGoalButton2 = document.getElementById("dropgoal2");
const team2TotalScore = document.getElementById("team2TotalScore");






let team;
let teamOneTotal = 0;
let teamTwoTotal =0;
let timer = 80;
let team1Score = 0;
let team2Score = 0;
let tryScore = 5;
let conversion = 2;
let penalty = 3;
let dropGoal = 3;


const setTimer = ()  => {
    let currentTimer = timer;
}




//team 1
tryButton1.addEventListener("click", () => {
    console.log("button 1 try clicked")
    team1Score += tryScore;
    console.log(`my total is ${team1Score}`);
    team1TotalScore.textContent = team1Score;

    // team1Score.textContent = 'Total score is '
})

conversionButton1.addEventListener("click", () => {
    console.log("conversion 1 clicked")
    team1Score += conversion;
    team1TotalScore.textContent = team1Score;
})

penaltyButton1.addEventListener("click", () => {
    console.log("penalty 1 clicked")
    team1Score += penalty;
    team1TotalScore.textContent = team1Score;

})

dropGoalButton1.addEventListener("click", () => {
    console.log("drop goal 1 is clicked")
    team1Score += dropGoal;
    team1TotalScore.textContent = team1Score;

})

//team 2
tryButton2.addEventListener("click", () => {
    console.log("button 2 try clicked")
    team2Score += tryScore;
    team2TotalScore.textContent = team1Score;

})

conversionButton2.addEventListener("click", () => {
    console.log("conversion 2 clicked")
})

penaltyButton2.addEventListener("click", () => {
    console.log("penalty 2 clicked")
})

dropGoalButton2.addEventListener("click", () => {
    console.log("drop goal 2 is clicked")
})



