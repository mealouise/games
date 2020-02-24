// const input1 = document.getElementById("input1");
// const team1 = document.getElementById("team1");

//team 1
const startButton = document.getElementById("startGame");
const startScreen = document.getElementById("startScreen");
const resetButton = document.getElementById("resetButton");
const scoreBoard = document.getElementById("scoreBoard");
const timer = document.getElementById("timer");
const tryButton1 = document.getElementById("try1");
const conversionButton1 = document.getElementById("conversion1");
const penaltyButton1 = document.getElementById("penalty1");
const dropGoalButton1 = document.getElementById("dropgoal1")
const team1TotalScore = document.getElementById("team1TotalScore");
const tryCountTeam1 = document.getElementById("tryCountTeam1");
const conversionTeam1 = document.getElementById("tryConversionTeam1");
const penaltyTeam1 = document.getElementById("penaltyTeam1");
const dropGoalTeam1 = document.getElementById("dropGoalTeam1");
const teamOneNameDisplay = document.getElementById("teamOneName");
const teamTwoNameDisplay = document.getElementById("teamTwoName");
const teamOneInput = document.getElementById("teamOneInput");
const teamTwoInput = document.getElementById("teamTwoInput");




//team 2
const tryButton2 = document.getElementById("try2");
const conversionButton2 = document.getElementById("conversion2");
const penaltyButton2 = document.getElementById("penalty2");
const dropGoalButton2 = document.getElementById("dropgoal2");
const team2TotalScore = document.getElementById("team2TotalScore");
const tryCountTeam2 = document.getElementById("tryCountTeam2");
const conversionTeam2 = document.getElementById("tryConversionTeam2");
const penaltyTeam2 = document.getElementById("penaltyTeam2");
const dropGoalTeam2 = document.getElementById("dropGoalTeam2");


let teamOneName = "";
let teamTwoName = "";
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

let minutes = 0;
let seconds = 0;

const gameSpeed = 1000;


const startScoreboard = () => {

    seconds++;
    if ( seconds === 60) {
        seconds = 0;
        minutes++;
    } 

    let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    timer.textContent = displayMinutes + ":" + displaySeconds;

    if ( minutes === 1) {
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
   

    setTimeout(startScoreboard, gameSpeed);
}

teamOneInput.addEventListener("change", () => {
    teamOneName = teamOneInput.value;
    console.log("team name added");
})

teamTwoInput.addEventListener("change", () => {
    teamTwoName = teamTwoInput.value;
})

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    scoreBoard.style.display = "flex";
    teamOneNameDisplay.textContent = teamOneName;
    teamTwoNameDisplay.textContent = teamTwoName;
    startScoreboard();
    
})

const reset = () => {
    console.log("reset button clicked")
    minutes = 0;
    seconds = 0;
    tryCount1 = 0;
    conversionCount1 = 0;
    penaltyCount1 = 0;
    dropGoalCount1 = 0;
    tryCount2 = 0;
    conversionCount2 = 0;
    penaltyCount2 = 0;
    dropGoalCount2 = 0;
    tryCountTeam1.textContent = 0;
    conversionTeam1.textContent = 0;
    penaltyTeam1.textContent = 0;
    dropGoalTeam1.textContent = 0;
    tryCountTeam2.textContent = 0;
    conversionTeam2.textContent = 0;
    penaltyTeam2.textContent = 0;
    dropGoalTeam2.textContent = 0;
}



resetButton.addEventListener("click", () => {
    startScreen.style.display = "flex";
    scoreBoard.style.display = "none";
    // tryCountTeam1.textContent = 0;
    // conversionTeam1.textContent = 0;
    // penaltyTeam1.textContent = 0;
    // dropGoalTeam2.textContent = 0;
    // tryCount2.textContent = 0;
    reset();
})


//team 1
tryButton1.addEventListener("click", () => {
    console.log("button 1 try clicked")
    team1Score += tryScore;
    console.log(`my total is ${team1Score}`);
    team1TotalScore.textContent = team1Score;
    tryCount1++;
    tryCountTeam1.textContent = tryCount1;



    // team1Score.textContent = 'Total score is '
})

conversionButton1.addEventListener("click", () => {
    console.log("conversion 1 clicked")
    team1Score += conversion;
    team1TotalScore.textContent = team1Score;
    conversionCount1++;
    conversionTeam1.textContent = conversionCount1;  
})

penaltyButton1.addEventListener("click", () => {
    console.log("penalty 1 clicked")
    team1Score += penalty;
    team1TotalScore.textContent = team1Score;
    penaltyCount1++;
    penaltyTeam1.textContent = penaltyCount1; 
})

dropGoalButton1.addEventListener("click", () => {
    console.log("drop goal 1 is clicked")
    team1Score += dropGoal;
    team1TotalScore.textContent = team1Score;
    dropGoalCount1++;
    dropGoalTeam1.textContent = dropGoalCount1;

})

//team 2
tryButton2.addEventListener("click", () => {
    console.log("button 2 try clicked")
    team2Score += tryScore;
    team2TotalScore.textContent = team2Score;
    tryCount2++;
    tryCountTeam2.textContent = tryCount2;

})

conversionButton2.addEventListener("click", () => {
    console.log("conversion 2 clicked")
    team2Score += conversion;
    team2TotalScore.textContent = team2Score;
    conversionCount2++;
    conversionTeam2.textContent = conversionCount2; 
})

penaltyButton2.addEventListener("click", () => {
    console.log("penalty 2 clicked")
    team2Score += penalty;
    team2TotalScore.textContent = team2Score;
    penaltyCount2++;
    penaltyTeam2.textContent = penaltyCount2; 
})

dropGoalButton2.addEventListener("click", () => {
    console.log("drop goal 2 is clicked")
    team2Score += dropGoal;
    team2TotalScore.textContent = team2Score;
    dropGoalCount2++;
    dropGoalTeam2.textContent = dropGoalCount2;
})



