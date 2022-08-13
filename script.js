let choicesList = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return choicesList[Math.floor((Math.random() * 3) + 1) - 1];
}

console.log(getComputerChoice())