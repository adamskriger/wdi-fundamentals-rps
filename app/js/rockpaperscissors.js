var playerWins = 0;
var computerWins = 0;
    
    function getPlayerMove() {
    var playerMove = prompt("Please choose either rock, paper, or scissors");
    }



    function getComputerMove() {
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

    }

    function getWinner(playerMove, computerMove) {
        if (playerMove === computerMove) {
        document.write("We have a tie.");
        }

        if (playerMove === "rock" && computerMove === "scissors") {
        return playerWins++;
        } else if (playerMove === "rock" && computerMove === "paper") {
        return computerWins++;
        }

        if (playerMove === "paper" && computerMove === "rock") {
        return playerWins++;
        }else if (playerMove=== "paper" && computerMove === "scissors") {
        return computerWins++;
        }

        if (playerMove === "scissors" && computerMove === "paper") {
        return playerWins++;
        }else if (playerMove === "scissors" && computerMove === "rock") {
        return computerWins++;
        }

    }

    function playToFive(){

    while (playerWins < 5 || computerWins < 5) {

        getPlayerMove;
        getComputerMove;
        getWinner;
    }


    }
 playToFive();



