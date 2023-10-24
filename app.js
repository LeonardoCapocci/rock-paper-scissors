function rockPaperScissors() {
    let int = Math.floor(Math.random() * 3);
    let response = '';
    if (int == 0) {
        response = "rock";
    }
    else if (int == 1) {
        response = "paper";
    }
    else if (int == 2) {
        response = "scissors";
    }
    return response;
}

const userWins = document.querySelector("#user-wins")
userWins.innerHTML = 0
const botWins = document.querySelector("#computer-wins")
botWins.innerHTML = 0

function playRound(rps) {
    let playerSelection = rps;
    let computerSelection = rockPaperScissors();
    let result = '';
    const roundResult = document.querySelector("#round-result");


    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "TIE";
        }
        if (computerSelection == "paper") {
            result = "LOSS";
        }
        if (computerSelection == "scissors") {
            result = "WIN";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "WIN";
        }
        if (computerSelection == "paper") {
            result = "TIE";
        }
        if (computerSelection == "scissors") {
            result = "LOSS";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "LOSS";
        }
        if (computerSelection == "paper") {
            result = "WIN";
        }
        if (computerSelection == "scissors") {
            result = "TIE";
        }
    }

    if (result == "WIN") {
        userWins.innerHTML ++
    }
    else if (result == "LOSS") botWins.innerHTML ++

    if (userWins.innerHTML == 5) {
        result = "YOU WIN!"
        userWins.innerHTML = 0
        botWins.innerHTML = 0
    }
    else if (botWins.innerHTML == 5) {
        result = "YOU LOSE!"
        userWins.innerHTML = 0
        botWins.innerHTML = 0
    }

    roundResult.innerHTML = result;
    return console.log(result);


}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("scissors"));



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