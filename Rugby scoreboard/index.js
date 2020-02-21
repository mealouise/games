//team 1
const startButton = document.getElementById("startGame");
const startScreen = document.getElementById("startScreen");
const scoreBoard = document.getElementById("scoreBoard");
const timer = document.getElementById("timer");
const tryButton1 = document.getElementById("try1");
const conversionButton1 = document.getElementById("conversion1");
const penaltyButton1 = document.getElementById("penalty1");
const dropGoalButton1 = document.getElementById("dropgoal1")
const team1TotalScore = document.getElementById("team1TotalScore");
const tryCountTeam1 = document.getElementById("tryCountTeam1");






//team 2
const tryButton2 = document.getElementById("try2");
const conversionButton2 = document.getElementById("conversion2");
const penaltyButton2 = document.getElementById("penalty2");
const dropGoalButton2 = document.getElementById("dropgoal2");
const team2TotalScore = document.getElementById("team2TotalScore");


let team;
let teamOneTotal = 0;
let teamTwoTotal =0;
let clock = 0;
let team1Score = 0;
let team2Score = 0;
let tryScore = 5;
let conversion = 2;
let penalty = 3;
let dropGoal = 3;

let tryCount1 = 0;
let conversionCount1 = 0;
let penaltyCount1 = 0;
let dropGoalCount1 = 0;

let tryCount2 = 0;
let conversionCount2 = 0;
let penaltyCount2 = 0;
let dropGoalCount2 = 0;



// const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// const seconds = Math.floor((distance % (1000 * 60)) / 1000);


// const setTimer = ()  => {
//     let currentTimer = timer;
// }

const startScoreboard = () => {
    clock++;
    console.log('clock', clock);
    timer.textContent = clock;
    // timer.textContent = hours + "h " + minutes + "m " + seconds + "s ";
    if (clock === 10) {
        tryButton1.disabled = true;
        conversionButton1.disabled = true;
        penaltyButton1.disabled = true;
        dropGoalButton1.disabled = true;
        tryButton2.disabled = true;
        conversionButton2.disabled = true;
        penaltyButton2.disabled = true;
        dropGoalButton2.disabled = true;
        return;
    }
    setTimeout(startScoreboard, 1000);
}

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    scoreBoard.style.display = "flex";
    startScoreboard();
})

//team 1
tryButton1.addEventListener("click", () => {
    console.log("button 1 try clicked")
    team1Score += tryScore;
    tryCount1++;
    console.log(`my total is ${team1Score}`);
    team1TotalScore.textContent = team1Score;
    tryCountTeam1.textContent = tryCount1;



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
    team2TotalScore.textContent = team2Score;

})

conversionButton2.addEventListener("click", () => {
    console.log("conversion 2 clicked")
    team2Score += conversion;
    team2TotalScore.textContent = team2Score;

})

penaltyButton2.addEventListener("click", () => {
    console.log("penalty 2 clicked")
    team2Score += penalty;
    team2TotalScore.textContent = team2Score;
})

dropGoalButton2.addEventListener("click", () => {
    console.log("drop goal 2 is clicked")
    team2Score += dropGoal;
    team2TotalScore.textContent = team2Score;
})



