playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round: ${i} Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}`);

        const roundWinner = playRound(humanChoice, computerChoice);
        if(roundWinner === "Computer") {
            computerScore++;
        } else if(roundWinner === "Human") {
            humanScore++;
        }
        console.log(`Round ${i} Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    
    if(humanScore > computerScore) {
        console.log("Human Wins!");
    } else if (humanScore < computerScore) {
        console.log("Computer Wins!");
    } else {
        console.log("Tie Game");
    }
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


//console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);

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

function getHumanChoice() {
    let userChoice = prompt(`Enter "1" for Rock, "2" for Paper, "3" for Scissors`);
    switch(userChoice) {
        case "1":
            return "Rock";
        case "2":
            return "Paper";
        case "3":
            return "Scissors";
        default:
            return null;
    }
}
