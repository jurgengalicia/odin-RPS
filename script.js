let buttonList = [document.querySelector(".rock-el"), document.querySelector(".paper-el"), document.querySelector(".scissors-el")];
let tryAgainButton = document.querySelector(".hide-button")
let tally = {humanScore: 4, computerScore: 4};
let announceDiv = document.querySelector(".announce-div")
let roundDiv = document.querySelector(".round-div")
let tallyDiv = document.querySelector(".tally-div")


function resetGame(){
    buttonList.map(x => x.disabled = false)
    this.classList.add("hide-button")
    tally.humanScore = 0;
    tally.computerScore = 0;
    announceDiv.textContent = "Welcome to Rock Paper Scissors! Make your selection to start a game."
    roundDiv.textContent = ""
    tallyDiv.textContent = ""
}

tryAgainButton.addEventListener('click', resetGame);

for(let i = 0; i <= 2; i++){
    let currButton = buttonList[i];
    currButton.addEventListener('click', e =>  playRound(getComputerChoice(), buttonList[i].textContent.toLowerCase() ,tally) )
}


function getComputerChoice() {
    let handOptions = ["rock", "paper", "scissors"]
    let pickHand = Math.floor(Math.random() * 3);
    return handOptions[pickHand];
}

function createChildPara(ParaText){
    let result = document.createElement("p")
    result.createTextNode(ParaText);
    return result;
}

// prompt user for a choice
let getHumanChoice = () => prompt("Please enter your hand choice: rock, paper or scissors", "Rock").toLowerCase();

//determine if a given word should be plural based on num
let pluralize = (word, num) => num == 1 ? word : `${word}s`;

function playRound(compChoice,humanChoice,tally){
    let scoreingSheet = {"rock":"scissors", "scissors":"paper", "paper":"rock"}
    announceDiv.textContent = `Your choice: ${humanChoice} | Computer's choice: ${compChoice}`;
    if(scoreingSheet[compChoice] === humanChoice){
        tally.computerScore += 1;
        roundDiv.textContent = `You lose this round, ${compChoice} beats ${humanChoice}`
    } else if(scoreingSheet[humanChoice] === compChoice){
        tally.humanScore += 1; 
        roundDiv.textContent = `You win this round! ${humanChoice} beats ${compChoice}`
    } else {
        roundDiv.textContent = "its a tie"
    }
    tallyDiv.textContent = `Current score, you: ${tally.humanScore}, computer: ${tally.computerScore}`

    let humanScore = tally.humanScore;
    let computerScore = tally.computerScore;

    if(computerScore == 5 || humanScore == 5){
        if(humanScore > computerScore){
            announceDiv.textContent = `You win the game! You scored ${humanScore} ${pluralize('point',humanScore)} when the computer got ${computerScore} ${pluralize('point',computerScore)}.`;
        } else if (humanScore < computerScore) {
            announceDiv.textContent = `You lose the game. The computer got ${computerScore} ${pluralize('point',computerScore)} while you scored ${humanScore} ${pluralize('point',humanScore)}.`;
        }
        roundDiv.textContent = "Would you like to play again?";
        tryAgainButton.classList.remove("hide-button")
        buttonList.map(x => x.disabled = true)
    }
}

