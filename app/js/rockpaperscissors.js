// It's much easier to read this code when it's formatted: you can paste it into jsbeautifier.org for tidying
// It's better to format it nicely as you write it.

var playerWins = 0;
var computerWins = 0;

function getPlayerMove() {
    var playerMove = prompt("Please choose either rock, paper, or scissors");
    // You need to return the playerMove so you can use it elsewhere in the program
    return playerMove;
}


function randomPlay() {
        var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return "rock";
        } else if (randomNumber < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }

function getComputerMove() {
    randomPlay();

}

// console.log will give you fewer problems than document.write in this program
function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        console.log("We have a tie.");
    }

    if (playerMove === "rock" && computerMove === "scissors") {
        return playerWins++;
    } else if (playerMove === "rock" && computerMove === "paper") {
        return computerWins++;
    }

    if (playerMove === "paper" && computerMove === "rock") {
        return playerWins++;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return computerWins++;
    }

    if (playerMove === "scissors" && computerMove === "paper") {
        return playerWins++;
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return computerWins++;
    }

}

function playToFive() {

    while (playerWins < 5 || computerWins < 5) {
        // These need parentheses after them to actually call the functions,
        // and you need to capture the return values in variables to pass them to getWinner
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        getWinner(playerMove, computerMove);
    }


}
playToFive();
