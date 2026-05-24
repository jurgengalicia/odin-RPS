let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let handOptions = ["rock", "paper", "scissors"]
    let pickHand = Math.floor(Math.random() * 3);
    return handOptions[pickHand];
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your hand choice", "Rock").toLowerCase();
    return humanChoice;
}

function playRound(compChoice,humanChoice){
    console.log("compChoice test", compChoice);
    console.log("humanChoice test", humanChoice);
    let scoreingSheet = {"rock":"scissors", "scissors":"paper", "paper":"rock"}
    if(scoreingSheet[compChoice] === humanChoice){
        computerScore += 1;
        console.log(`You lose this round, ${compChoice} beats ${humanChoice}`)
    } else if(scoreingSheet[humanChoice] === compChoice){
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beats ${compChoice}`)
    } else {
        console.log("its a tie");
    }
    console.log("human score",humanScore);
    console.log("computer score",computerScore);
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice())
    }
    if(humanScore > computerScore){
        console.log(`You win the game! You scored ${humanScore} points when the computer got ${computerScore} points.`)
    } else if (humanScore < computerScore) {
        console.log(`You lose the game. The computer got ${computerScore} points while you scored ${humanScore} points.`)
    } else {
        console.log("It's a draw! Play another game?")
    }
}

playGame();
