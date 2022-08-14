let choicesList = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choicesList[Math.floor((Math.random() * 3) + 1) - 1];
}

function checkWinner(choice1, choice2){
    if((choice1 === "rock" && choice2 == "scissors") ||
        (choice1 === "paper" && choice2 == "rock") ||
        (choice1 === "scissors" && choice2 == "paper"))
        return true;
    return false;
}

function playRound(playerChoice, computerChoice){
    let lowerPlayer = playerChoice.toLowerCase();
    let lowerComputer = computerChoice.toLowerCase();
    let capitalPlayer = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    let capitalComputer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    if(lowerComputer === lowerPlayer)
        return "It's a draw!"
    else if(checkWinner(lowerPlayer,lowerComputer))
        return `You win! ${capitalPlayer} beats ${capitalComputer}`
    else
        return `You lose... ${capitalComputer} beats ${capitalPlayer}`
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();


console.log(playRound(playerChoice,computerChoice))