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
