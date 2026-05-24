let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let handOptions = ["Rock", "Paper", "Scissors"]
    let pickHand = Math.floor(Math.random() * 3);
    return handOptions[pickHand];
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your hand choice", "Rock").toLowerCase();
    return humanChoice;
}

function playRound(compChoice,humanChoice){
    let scoreingSheet = {"rock":"scissors", "scissors":"paper", "paper":"rock"}
    if(scoreingSheet[compChoice] === humanChoice){
        computerScore += 1;
        console.log(`You lose, ${compChoice} beats ${humanChoice}`)
    } else if(scoreingSheet[humanChoice] === compChoice){
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${compChoice}`)
    } else {
        console.log("its a tie");
    }
    console.log("human score",humanScore);
    console.log("computer score",computerScore);
}

const humanChoice = getHumanChoice();
const compChoice = getComputerChoice();

playRound(compChoice, humanChoice)