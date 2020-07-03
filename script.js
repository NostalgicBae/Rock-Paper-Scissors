
function computerPlay() {

    let moves = ["rock", "paper", "scissors"];
    let computerSelection = moves[Math.floor(Math.random() * moves.length)];

    return(computerSelection);
}

let numberOfRounds = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    document.getElementById("Player-Selection").innerHTML = "Player Chose: " + playerSelection
    document.getElementById("Computer-Selection").innerHTML = "Computer Chose: " + computerSelection
    
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore = computerScore + 1
        document.getElementById("Result-Area").innerHTML = "Computer Wins"
        document.getElementById("Computer-Score-Area").innerHTML = "Computer: " + computerScore
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1
        document.getElementById("Result-Area").innerHTML = "Player wins"
        document.getElementById("Player-Score-Area").innerHTML = "Player: " + playerScore
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore = computerScore + 1
        document.getElementById("Result-Area").innerHTML = "Computer Wins"
        document.getElementById("Computer-Score-Area").innerHTML = "Computer: " + computerScore
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = playerScore + 1
        document.getElementById("Result-Area").innerHTML = "Player wins"
        document.getElementById("Player-Score-Area").innerHTML = "Player: " + playerScore
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore = computerScore + 1
        document.getElementById("Result-Area").innerHTML = "Computer Wins"
        document.getElementById("Computer-Score-Area").innerHTML = "Computer: " + computerScore
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = playerScore + 1
        document.getElementById("Result-Area").innerHTML = "Player wins"
        document.getElementById("Player-Score-Area").innerHTML = "Player: " + playerScore
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        playerScore = playerScore + 0
        computerScore = computerScore + 0
        document.getElementById("Result-Area").innerHTML = "It's a draw"
        document.getElementById("Player-Score-Area").innerHTML = "Player: " + playerScore
        document.getElementById("Computer-Score-Area").innerHTML = "Computer: " + computerScore
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        playerScore = playerScore + 0
        computerScore = computerScore + 0
        document.getElementById("Player-Score-Area").innerHTML = "Player: " + playerScore
        document.getElementById("Computer-Score-Area").innerHTML = "Computer: " + computerScore
        document.getElementById("Result-Area").innerHTML = "It's a draw"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        playerScore = playerScore + 0
        computerScore = computerScore + 0
        document.getElementById("Player-Score-Area").innerHTML = "Player: " + playerScore
        document.getElementById("Computer-Score-Area").innerHTML = "Computer: " + computerScore
        document.getElementById("Result-Area").innerHTML = "It's a draw"
    } else {
        playerScore = playerScore + 0
        computerScore = computerScore + 0
        document.getElementById("Player-Score-Area").innerHTML = "Player: " + playerScore
        document.getElementById("Computer-Score-Area").innerHTML = "Computer: " + computerScore
        document.getElementById("Result-Area").innerHTML = "ERROR"
    }
}

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        
        let playerSelection = button.id.toLowerCase();

        playRound(playerSelection,computerPlay());
    })
})