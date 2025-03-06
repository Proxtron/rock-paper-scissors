const previousRoundsRef = document.getElementById("previous-rounds");
const humanScoreRef = document.getElementById("human-score");
const computerScoreRef = document.getElementById("computer-score");
const gameScoreRef = document.getElementById("game-score");

let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    humanScoreRef.innerText = humanScore
    computerScoreRef.innerText = computerScore
    attachEventListeners();
}

function attachEventListeners() {
    const buttonRefs = document.querySelectorAll(".btn");
    buttonRefs.forEach((button) => {
        button.addEventListener("click", (event) => {
            if(event.currentTarget.id === "rock-btn" || event.currentTarget.id === "paper-btn" || event.currentTarget.id === "scissors-btn") {     
                const computerChoice = getComputerChoice();
                const humanChoice = getHumanChoice(event.currentTarget.id)

                const roundWinner = playRound(humanChoice, computerChoice);
                if(roundWinner === "Computer") {
                    computerScore++;
                } else if(roundWinner === "Human") {
                    humanScore++;
                }

                humanScoreRef.innerText = humanScore
                computerScoreRef.innerText = computerScore
            
                const choiceToIconMap = new Map();
                choiceToIconMap.set("Rock", "img/rock.png")
                choiceToIconMap.set("Paper", "img/paper.png")
                choiceToIconMap.set("Scissors", "img/scissors.png")

                const winnerToDisplayMap = new Map();
                winnerToDisplayMap.set("Tie", "Tie Round")
                winnerToDisplayMap.set("Human", "You win")
                winnerToDisplayMap.set("Computer", "Computer wins")

                const previousRoundsRef = document.getElementById("previous-rounds");
                previousRoundsRef.innerHTML = `
                <div class="previous-round-item">
                    <div class="left-side">
                        <img class="mini-rps-img" width=auto height=20 src="${choiceToIconMap.get(humanChoice)}">
                        <p>vs</p>
                        <img class="mini-rps-img" width=auto height=20 src="${choiceToIconMap.get(computerChoice)}">
                    </div>
                    <div class="right-side">
                        <p>${winnerToDisplayMap.get(roundWinner)}</p>
                    </div>
                </div>
                ` + previousRoundsRef.innerHTML;
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
