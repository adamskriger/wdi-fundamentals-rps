'use strict';

var playerScore = 0; 
var computerScore = 0; 
var playerMove; 
var computerMove;

function getPlayerMove() {
    playerMove = prompt('Choose "rock", "scissors", or "paper"');
    return playerMove.toLowerCase(); 
}


function randomPlay() {
    var randomNumber = Math.random(); 
    
    if (Math.random < .33) {
    return "rock";
    }
    else if (Math.random < .66) {
    return "paper";
    }
    else if (Math.random < 1){
    return "scissors";
    }
}

function getComputerMove() {
    computerMove = randomPlay();
}


function getWinner(playerMove, ComputerMove) {
if (playerMove === "rock" && computerMove === "rock") {
    console.log("The result is a tie");
}
else if (playerMove === "rock" && computerMove === "scissors") {
    console.log("Player Wins")
    playerScore++;
}

else if (playerMove === "rock" && computerMove === "paper"){
    console.log("Computer Wins");
    computerScore++; 
}

else if (playerMove === "paper" && computerMove === "paper") {
    console.log("The result is a tie");
}
else if (playerMove === "paper" && computerMove === "rock") {
    console.log("Player Wins");
    playerScore ++; 
}
else if (playerMove === "paper" && computerMove ==="scissors" ) {
    console.log("computer wins");
    computerScore++; 
}
else if (playerMove === "scissors" && computerMove === "scissors") {
    console.log("The result is a tie");
}
else if (playerMove = "scissors" && computerMove === "paper") {
    console.log("Player Wins");
    playerScore++; 
}
else if (playerMove === "scissors" && computerMove === "rock") {
    console.log("Computer Wins");
    computerScore++; 
}
}

function playToFive() {

    while ((playerScore < 5) || (computerScore < 5) ) {

        var player = getPlayerMove();
        var computer = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        console.log("The computer move is " + computerMove)

        console.log("The player's score is " + playerScore);
        console.log("The computer's score is " + computerScore);
}
}

playToFive(); 


