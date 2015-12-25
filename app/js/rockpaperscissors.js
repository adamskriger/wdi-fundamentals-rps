////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

œ {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();

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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    playerMove = prompt();
    if (prompt === true) {
        result = prompt();
    }
    else if (prompt() === null) {
        console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    }
       
}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    computerMove = randomPlay();

    
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if(playerMove === computerMove) 
    {
            return "Looks like we have a tie.";
    }
    else if (playerMove === "rock")
        {
            if(computerMove === "scissors") 
            {
                return playerWins;
            }

            else if (computerChoice === "paper")
            {
                return computerWins;
            }
        }

        else if (PlayerMove === "paper") 
        {
            if (computerMove === "rock")
            {
                return playerWins;
            }
            else if (computerMove === "scissors")
            {
                return computerWins; 
            }
        }
        else if (playerMove === "scissors")
        {
            if(computerMove === "rock")
            {
                return computerWins;
            }
            else if (computerMove === "paper")
            {
                return playerWins;
            }
        }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if(i=0, i<6, i++)
    {
        getPlayerMove(move);
        getComputerMove(move);
        getWinner(playerMove, computerMove)
        if (playerWins <=5 || computerWins <= 5) {
        return [playerWins, computerWins];}

    }
    


}

