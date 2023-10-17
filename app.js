let playerSelection = prompt("rock, paper, or scissors?")
let computerSelection = rockPaperScissors()

function rockPaperScissors() {
    let int = Math.floor(Math.random() * 3)
    if (int == 0) {
        let response = "rock"
        return response
    }
    else if (int == 1) {
        let response = "paper"
        return response
    }
    else if (int == 2) {
        let response = "scissors"
        return response
    }
    else {
        let response = "something's wrong"
        return response
    }
}

function playRound(
    playerSelection=playerSelection, computerSelection=computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            let result = "TIE"
            return result
        }
        if (computerSelection == "paper") {
            let result = "LOSS"
            return result
        }
        if (computerSelection == "scissors") {
            let result = "WIN"
            return result
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let result = "WIN"
            return result
        }
        if (computerSelection == "paper") {
            let result = "TIE"
            return result
        }
        if (computerSelection == "scissors") {
            let result = "LOSS"
            return result
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            let result = "LOSS"
            return result
        }
        if (computerSelection == "paper") {
            let result = "WIN"
            return result
        }
        if (computerSelection == "scissors") {
            let result = "TIE"
            return result
        }
    }
}

function game() {
    let playerWins = 0
    let ComputerWins = 0
    while (playerWins < 3 || ComputerWins < 3) {
        playRound()
        if (result == "WIN") {
            playerWins++
        }
    }
}