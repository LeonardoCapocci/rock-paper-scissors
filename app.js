function rockPaperScissors() {
    let int = Math.floor(Math.random() * 3)
    let response = ''
    if (int == 0) {
        response = "rock"
    }
    else if (int == 1) {
        response = "paper"
    }
    else if (int == 2) {
        response = "scissors"
    }
    return response
}

function playRound() {
    let playerSelection = "rock"
    let computerSelection = rockPaperScissors()
    let result = ''
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "TIE"
        }
        if (computerSelection == "paper") {
            result = "LOSS"
        }
        if (computerSelection == "scissors") {
            result = "WIN"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "WIN"
        }
        if (computerSelection == "paper") {
            result = "TIE"
        }
        if (computerSelection == "scissors") {
            result = "LOSS"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "LOSS"
        }
        if (computerSelection == "paper") {
            result = "WIN"
        }
        if (computerSelection == "scissors") {
            result = "TIE"
        }
    }
    return result
}

function game() {
    let playerWins = 0
    let computerWins = 0
    let roundResult = ''
    while (playerWins < 3 && computerWins < 3) {
        roundResult = playRound()
        if (roundResult == "WIN") {
            playerWins++
        }
        else if (roundResult == "LOSS") {
            computerWins++
        }
        else {
        }
        console.log(roundResult)
    }
    if (playerWins == 3) {
        console.log("You win the game!")
    }
    else {
        console.log("You lose the game!")
    }
}

game()