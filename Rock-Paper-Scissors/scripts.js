// return ("Happy Toyin")

// let randomNumber = Math.floor((Math.random() * 3) + 1)

// return (randomNumber)


//This function generates what computer plays and returns the hand... either Rock Paper or Scissors
function computerPlay() {
    let plays = ["Empty", "rock", "paper", "scissors"]
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    let computerHand = plays[randomNumber]
    return computerHand
}



//This function sets the rule of the game, compares the player hand with computer hand and return who wins
function gamePlay(player, computer) {
    player = player.toLowerCase()
    console.log("Computer Plays: " + computer)
    if (player === "rock" && computer === "scissors") {
        return ("player wins Rock beats Scissors")
    }
    else if (player === "scissors" && computer === "rock") {
        return ("player lose Rock beats Scissors")
    }
    else if (player === "paper" && computer === "rock") {
        return ("player wins Paper beats Rock")
    }
    else if (player === "rock" && computer === "paper") {
        return ("player lose Paper beats Rock")
    }
    else if (player === "scissors" && computer === "paper") {
        return ("player wins Scissors beats Paper")
    }
    else if (player === "paper" && computer === "scissors") {
        return ("player lose Scissors beats Paper")
    }
    else { return ("Its a tie") }

}


//This is where the game is played
function game() {
    gameResults = []
    for (i = 0; i < 5; i++) {                                   // loop to play game 5 times
        let playerPlay = prompt("Please play your hand")        // gets input from user 
        let gameOutcome = gamePlay(playerPlay, computerPlay()) // calls gamePlay() from above and passes in its two arguments, the return is a string
        if (gameOutcome[7] === "w") {
            gameResults.push("Player Wins")                     // checks through the string to know if its a win or lose
        }
        else if (gameOutcome[7] === "l") {
            gameResults.push("Computer Wins")
        } else { gameResults.push("Its a tie") }
    }
    return gameResults                                          // returns result in array form
}

console.log(game())

