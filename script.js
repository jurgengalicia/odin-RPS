let choicesList = ["rock", "paper", "scissors"];
let scores = {"player":0, "computer":0};

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

function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = this.id;
    let capitalPlayer = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    let capitalComputer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    if(computerChoice === playerChoice)
        announce.textContent = "It's a draw!"
    
    else if(checkWinner(playerChoice,computerChoice)){
        playerTally.textContent = ++scores["player"];
        announce.textContent =  `You win! You played: ${capitalPlayer}, and that beats ${capitalComputer}(computer)`;
    }
    else{
        computerTally.textContent = ++scores["computer"];
        announce.textContent =  `You lose... You played: ${capitalPlayer}, and that loses to ${capitalComputer}(computer)`;
    }
}

function game(){
    for(let i = 0; i <= 5; i++){
        let userPrompt = prompt("Play your choice! Rock, Paper, or Scissors?","rock").trim().toLocaleLowerCase();
        let computerChoice = getComputerChoice();
        if(!choicesList.includes(userPrompt)){
            console.log("Please try again, make sure you type either Rock, Paper or Scissors")
            i--;
        }
        else
            console.log(playRound(userPrompt, computerChoice));
    }
    console.log(`out of 5 games, you won ${scores["player"]} times against the computer, who won ${scores["computer"]} times`)
}

function clickChoice(){
    console.log(this.classList[0]);
}
    


let choices = document.querySelectorAll('.choice');
let announce  = document.querySelector('.win-text');
let playerTally  = document.querySelector('.player-score');
let computerTally  = document.querySelector('.computer-score');

choices.forEach(choice => {
    choice.addEventListener('click', playRound)
});

//game();
