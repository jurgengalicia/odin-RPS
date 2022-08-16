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

function playRound(playerChoice, computerChoice){
    let lowerPlayer = playerChoice.toLowerCase();
    let lowerComputer = computerChoice.toLowerCase();
    let capitalPlayer = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    let capitalComputer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    if(lowerComputer === lowerPlayer){
        return "It's a draw!"
    }
    else if(checkWinner(lowerPlayer,lowerComputer)){
        scores["player"]++;
        return `You win! You played: ${capitalPlayer}, and that beats ${capitalComputer}(computer)`
    }
    else{
        scores["computer"]++;
        return `You lose. You played: ${capitalPlayer}, and that loses to ${capitalComputer}(computer)`
    }
}

const playerChoice = "rock";

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

game();
