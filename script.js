/* Defines the needed variables in global scope. */
let playerScore = 0;
let computerScore = 0;
let announceResult = "";
let finalScore = "";

/* lets the computer choose a random item from array "weapons".*/
function computerPlay() {
    const weapons = ["Rock", "Paper", "Scissors"];
        let computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
        return computerSelection;
}
  
/* plays one round of the game. compares playerSelection and computerSelection variables, announces a winner for that round and adds 1 point to the score. */
function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay().toLowerCase();

    if (playerSelection == computerSelection) {
            announceResult = "It's a tie";
          
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            announceResult = "You lose! Paper beats Rock";
          
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++;
            announceResult = "You win! Rock beats Scissors";
            
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++;
            announceResult = "You win! Paper beats Rock";
            
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            announceResult = "You lose! Scisors beats Paper";
            
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            announceResult = "You lose! Rock beats Scissors";
          
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++;
            announceResult = "Your win! Scissors beats Paper";
          
        } else {announceResult = "This weapon is not allowed!";
            return ("This weapon is not allowed!")}
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


/* functions for the callback in the eventListener*/
function playRock() {
    playRound("rock", computerPlay);
}

function playPaper() {
    playRound("paper", computerPlay);
}

function playScissors() {
    playRound("scissors", computerPlay);
}

/*creates event listeners for the buttons, executes the functions and updates DOM elements*/
const btnR = document.querySelector("#rockButton");
btnR.addEventListener("click", playRock);
btnR.addEventListener("click", function (e) {
    resultsContent.textContent = announceResult;
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;
    checkRound();
});

const btnP = document.querySelector("#paperButton");
btnP.addEventListener("click", playPaper);
btnP.addEventListener("click", function (e) {
    resultsContent.textContent = announceResult;
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;
    checkRound();
});

const btnS = document.querySelector("#scissorsButton");
btnS.addEventListener("click", playScissors);
btnS.addEventListener("click", function (e) {
    resultsContent.textContent = announceResult;
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;
    checkRound();
});

const resetbtn = document.querySelector("#resetButton");
resetbtn.addEventListener("click", () => {
    resetScore();
});


/*checks if a player has reached 5 points and calls finalResult */
function checkRound() {
    if (playerScore == 5 || computerScore == 5) {
        finalResult();
    }
}
  

/* compares the final scores, announces the winner and removes the eventListeners from the buttons. */
function finalResult() {
        if (playerScore > computerScore) {
            finalScore = ("You won the Game!");
        } else if (playerScore < computerScore) {
            finalScore = ("You lost the Game!");
        } else {
            finalScore = ("It's a tie!");
        }
        finalResultContent.textContent = finalScore;
        btnR.removeEventListener("click", playRock);
        btnP.removeEventListener("click", playPaper);
        btnS.removeEventListener("click", playScissors);
}

/* resets the score to 0 and re-adds the eventListeners to the buttons */
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    announceResult = "";
    resultsContent.textContent = "";
    finalResultContent.textContent = "";
    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;
    btnR.addEventListener("click", playRock);
    btnR.addEventListener("click", function (e) {
        resultsContent.textContent = announceResult;
        playerScoreContent.textContent = playerScore;
        computerScoreContent.textContent = computerScore;
    });

    btnP.addEventListener("click", playPaper);
    btnP.addEventListener("click", function (e) {
        resultsContent.textContent = announceResult;
        playerScoreContent.textContent = playerScore;
        computerScoreContent.textContent = computerScore;
});

    btnS.addEventListener("click", playScissors);
    btnS.addEventListener("click", function (e) {
        resultsContent.textContent = announceResult;
        playerScoreContent.textContent = playerScore;
        computerScoreContent.textContent = computerScore;
});
}





