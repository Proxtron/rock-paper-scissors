let humanScore = 0;
let computerScore = 0;


/*
If human choice same as computerChoice, don't change the score
If human choice is Rock
    If computer choice is paper then increment computerScore
    If computer choice is scissors then increment humanScore
If human choice is Paper
    If computer choice is scissors then increment computerScore
    If computer choice is rock then increment humanScore
If human choice is Scissors
    If computer choice is rock then increment computerScore
    If computer choice is paper then increment humanScore
*/
function playRound(humanChoice, computerChoice) {
    console.log(`Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}`);
    if(humanChoice === "Rock") {
        if(computerChoice === "Paper") {
            computerScore++;
        } else if(computerChoice === "Scissors") {
            humanScore++;
        }
    } else if(humanChoice === "Paper") {
        if(computerChoice === "Scissors") {
            computerScore++;
        } else if(computerChoice === "Rock") {
            humanScore++;
        }
    } else if(humanChoice === "Scissors") {
        if(computerChoice === "Rock") {
            computerScore++;
        } else if(computerChoice === "Paper") {
            humanScore++;
        }
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
/*
Get Random num from 1 to 3
If num is 1 return rock
If num is 2 return paper
If num is 3 return scissors
If invalid roll, return null
*/
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

/*
Prompt user with "Enter "1" for Rock, "2" for Paper, "3" for Scissors"
Assign user input to userChoice variable
If userChoice is 1, return Rock
If userChoice is 2, return Paper
If userChoice is 3, return Scissors
If invalid input, return null
*/

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
