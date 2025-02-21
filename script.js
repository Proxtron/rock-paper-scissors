/*
Get Random num from 1 to 3
If num is 1 return rock
If num is 2 return paper
If num is 3 return scissors
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
            return "";
    }
}

console.log(getComputerChoice());