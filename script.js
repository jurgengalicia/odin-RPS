
function getComputerChoice() {
    let handOptions = ["Rock", "Paper", "Scissors"]
    let pickHand = Math.floor(Math.random() * 3);
    return handOptions[pickHand];
}