/* Defines the needed variables in global scope. */
let playerScore = 0;
let computerScore = 0;
let announceResult = "";
let finalScore;
let gameOverCheck = false;

/* lets the computer choose a random item from array "weapons".*/
function computerPlay() {
    const weapons = ["Rock", "Paper", "Scissors"];
        let computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
        return computerSelection;
}
  
/* plays a single round of the game. compares playerSelection and computerSelection variables, announces a winner and adds 1 point to the winneres score. */
function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay().toLowerCase();

    if (playerSelection == computerSelection) {
            announceResult = "It's a tie";
            return (announceResult);
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            announceResult = "You lose! Paper beats Rock";
            return (announceResult);
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++;
            announceResult = "You win! Rock beats Scissors";
            return (announceResult);
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++;
            announceResult = "You win! Paper beats Rock";
            return (announceResult);
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            announceResult = "You lose! Scisors beats Paper";
            return (announceResult);
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            announceResult = "You lose! Rock beats Scissors";
            return (announceResult);
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++;
            announceResult = "Your win! Scissors beats Paper";
            return (announceResult);
        } else {announceResult = "This weapon is not allowed!";
            return ("This weapon is not allowed!")}
}

/* compares the final scores and announces the winner. */
function finalResult() {
        if (playerScore > computerScore) {
            finalScore = ("You won the Game!");
        } else if (playerScore < computerScore) {
            finalScore = ("You lost the Game!");
        } else {
            finalScore = ("It's a tie!");
        }
        finalResultContent.textContent = finalScore;
        resetScore();
}

/* resets the score to 0 */
function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

/*checks if a player has reached 5 points */
function checkRound() {
    if (playerScore >= 5 || computerScore >= 5) {
        gameOverCheck = true;
        finalResult();
    }
}

/*creates the different containers for results and score*/
const resultsContainer = document.querySelector("#results_container");
const resultsContent = document.createElement("div");
resultsContent.classList.add("resultsContent");
resultsContainer.appendChild(resultsContent);

const playerScoreContainer = document.querySelector("#playerScore_container");
const playerScoreContent = document.createElement("div");
playerScoreContent.classList.add("playerScoreContent");
playerScoreContainer.appendChild(playerScoreContent);

const computerScoreContainer = document.querySelector("#computerScore_container");
const computerScoreContent = document.createElement("div");
computerScoreContent.classList.add("computerScoreContent");
computerScoreContainer.appendChild(computerScoreContent);

const finalResultContainer = document.querySelector("#finalResult_container");
const finalResultContent = document.createElement("div");
finalResultContent.classList.add("finalResultsContent");
finalResultContainer.appendChild(finalResultContent);


/*creates event listeners for the buttons, executes the functions and updates DOM elements*/
const btnR = document.querySelector("#rockButton");
btnR.addEventListener("click", () => {
  playRound("rock", computerPlay);
});
btnR.addEventListener('click', function (e) {
    resultsContent.textContent = announceResult;
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;
    checkRound();
});


const btnP = document.querySelector("#paperButton");
btnP.addEventListener("click", () => {
  playRound("paper", computerPlay);
});
btnP.addEventListener("click", function (e) {
    resultsContent.textContent = announceResult;
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;
    checkRound();
});


const btnS = document.querySelector("#scissorsButton");
btnS.addEventListener("click", () => {
  playRound("scissors", computerPlay);
});
btnS.addEventListener("click", function (e) {
    resultsContent.textContent = announceResult;
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;
    checkRound();
});


  

