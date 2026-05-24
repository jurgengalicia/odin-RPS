let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let handOptions = ["rock", "paper", "scissors"]
    let pickHand = Math.floor(Math.random() * 3);
    return handOptions[pickHand];
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your hand choice: rock, paper or scissors", "Rock").toLowerCase();
    return humanChoice;
}

function pluralize(word, num){
    return num == 1 ? word : `${word}s`
}

function playRound(compChoice,humanChoice){
    let scoreingSheet = {"rock":"scissors", "scissors":"paper", "paper":"rock"}
    console.log(`Your choice: ${humanChoice}`)
    console.log(`Computer's choice: ${compChoice}`)
    if(scoreingSheet[compChoice] === humanChoice){
        computerScore += 1;
        console.log(`You lose this round, ${compChoice} beats ${humanChoice}`)
    } else if(scoreingSheet[humanChoice] === compChoice){
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beats ${compChoice}`)
    } else {
        console.log("its a tie");
    }
    console.log(`Current score, you: ${humanScore}, computer: ${computerScore}`)
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice())
    }
    if(humanScore > computerScore){
        console.log(`You win the game! You scored ${humanScore} ${pluralize('point',humanScore)} when the computer got ${computerScore} ${pluralize('point',computerScore)}.`)
    } else if (humanScore < computerScore) {
        console.log(`You lose the game. The computer got ${computerScore} ${pluralize('point',computerScore)} while you scored ${humanScore} ${pluralize('point',humanScore)}.`)
    } else {
        console.log("It's a draw! Play another game?")
    }
}

playGame();
