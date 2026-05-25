function getComputerChoice() {
    let handOptions = ["rock", "paper", "scissors"]
    let pickHand = Math.floor(Math.random() * 3);
    return handOptions[pickHand];
}

// prompt user for a choice
let getHumanChoice = () => prompt("Please enter your hand choice: rock, paper or scissors", "Rock").toLowerCase();

//determine if a given word should be plural based on num
let pluralize = (word, num) => num == 1 ? word : `${word}s`;

function playRound(compChoice,humanChoice,tally){
    let scoreingSheet = {"rock":"scissors", "scissors":"paper", "paper":"rock"}
    console.log(`Your choice: ${humanChoice}`)
    console.log(`Computer's choice: ${compChoice}`)
    if(scoreingSheet[compChoice] === humanChoice){
        tally.computerScore += 1;
        console.log(`You lose this round, ${compChoice} beats ${humanChoice}`)
    } else if(scoreingSheet[humanChoice] === compChoice){
        tally.humanScore += 1; 
        console.log(`You win this round! ${humanChoice} beats ${compChoice}`)
    } else {
        console.log("its a tie");
    }
    console.log(`Current score, you: ${tally.humanScore}, computer: ${tally.computerScore}`)
}

function playGame(){
    let tally = {humanScore: 0, computerScore: 0};

    for(let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice(),tally)
    }
    let humanScore = tally.humanScore;
    let computerScore = tally.computerScore;
    if(humanScore > computerScore){
        console.log(`You win the game! You scored ${humanScore} ${pluralize('point',humanScore)} when the computer got ${computerScore} ${pluralize('point',computerScore)}.`)
    } else if (humanScore < computerScore) {
        console.log(`You lose the game. The computer got ${computerScore} ${pluralize('point',computerScore)} while you scored ${humanScore} ${pluralize('point',humanScore)}.`)
    } else {
        console.log("It's a draw! Play another game?")
        let replay = prompt("Would you like to play again?", "yes") == "yes" ? playGame(): "";
    }
}

playGame();
