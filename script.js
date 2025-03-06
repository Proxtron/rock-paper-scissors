const previousRoundsRef = document.getElementById("previous-rounds");
const humanScoreRef = document.getElementById("human-score");
const computerScoreRef = document.getElementById("computer-score");
const gameScoreRef = document.getElementById("game-score");

let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    humanScoreRef.innerText = `Human Score: ${humanScore}`;
    computerScoreRef.innerText = `Computer Score: ${computerScore}`;
    attachEventListeners();
}

function attachEventListeners() {
    const buttonRefs = document.querySelectorAll("button");
    buttonRefs.forEach((button) => {
        button.addEventListener("click", (event) => {
            const computerChoice = getComputerChoice();
            const humanChoice = getHumanChoice(event.target.id)

            const roundWinner = playRound(humanChoice, computerChoice);
            if(roundWinner === "Computer") {
                computerScore++;
            } else if(roundWinner === "Human") {
                humanScore++;
            }

            humanScoreRef.innerText = `Human Score: ${humanScore}`;
            computerScoreRef.innerText = `Computer Score: ${computerScore}`;
        
            const liElement = document.createElement("li");
            liElement.textContent = `Human: ${humanChoice}, Computer: ${computerChoice}, Outcome: ${roundWinner}`;
            previousRoundsRef.appendChild(liElement);

            if(computerScore === 5) {
                endGame("Computer");
            } else if(humanScore === 5) {
                endGame("Human");
            }
        })
    });
}

//Takes the winner of the game and ends the game
function endGame(gameWinner) {
    const buttonRefs = document.querySelectorAll("button");
    buttonRefs.forEach((button) => {
        button.setAttribute("disabled", "");
    })

    const gameOverMessage = document.createElement("h2");
    gameOverMessage.innerText = `Game Over! Winner: ${gameWinner}`;
    gameScoreRef.appendChild(gameOverMessage);
}
//Takes a human choice and a computer choice as arguments
//Returns:
//  "Human" if human wins the round
//  "Computer" if computer wins the round
//  "Tie"   if there is a tie
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "Tie";
    } else if(humanChoice === "Rock") {
        if(computerChoice === "Paper") {
            return "Computer";
        } else if(computerChoice === "Scissors") {
            return "Human";
        }
    } else if(humanChoice === "Paper") {
        if(computerChoice === "Scissors") {
            return "Computer";
        } else if(computerChoice === "Rock") {
            return "Human";
        }
    } else if(humanChoice === "Scissors") {
        if(computerChoice === "Rock") {
            return "Computer";
        } else if(computerChoice === "Paper") {
            return "Human";
        }
    }
}

function getComputerChoice() {
    let randomRoll = Math.floor(Math.random() * 3) + 1;
    switch(randomRoll) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return null;
    }
}

function getHumanChoice(id) {
    switch(id) {
        case "rock-btn":
            return "Rock";
        case "paper-btn":
            return "Paper";
        case "scissors-btn":
            return "Scissors";
        default:
            return null;
    }
}
