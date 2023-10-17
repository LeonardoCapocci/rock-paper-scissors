playerSelection = prompt("rock, paper, or scissors?")
computerSelection = rockPaperScissors()

function rockPaperScissors() {
    int = Math.floor(Math.random() * 3)
    if (int == 0) {
        response = "rock"
        return response
    }
    else if (int == 1) {
        response = "paper"
        return response
    }
    else if (int == 2) {
        response = "scissors"
        return response
    }
    else {
        response = "something's wrong"
        return response
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "TIE"
            return result
        }
        if (computerSelection == "paper") {
            result = "LOSS"
            return result
        }
        if (computerSelection == "scissors") {
            result = "WIN"
            return result
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "WIN"
            return result
        }
        if (computerSelection == "paper") {
            result = "TIE"
            return result
        }
        if (computerSelection == "scissors") {
            result = "LOSS"
            return result
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "LOSS"
            return result
        }
        if (computerSelection == "paper") {
            result = "WIN"
            return result
        }
        if (computerSelection == "scissors") {
            result = "TIE"
            return result
        }
    }
}

console.log("computer selection: " + computerSelection)
console.log(playRound(playerSelection, computerSelection))