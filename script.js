function getComputerChoice() {
    return Math.ceil(Math.random() * 3);
}

function getPlayerChoice() {
    while (True) {
        let choice = Math.ceil(parseInt(prompt(`Enter a number to play (or 'stop'):
            1: Rock
            2: Paper
            3: Scissors
            `)));

        if (!choice) {
            alert("No choice selected!")
        }
        else if (playerOutput > 3) {
            alert("Invalid choice!")
        }
        
        return choice;
    }
}

function convertChoice(choice) {
    let choiceString;
    switch(choice) {
        case 1:
            choiceString = "Rock";
            break;
        case 2:
            choiceString = "Paper";
            break;
        case 3:
            choiceString = "Scissors";
            break;
    }
    return choiceString;
}

function playRound(player = getPlayerChoice()) {
    if (player === "stop") {
        console.log("Stopping...");
        return "stop";
    }
    let computer = getComputerChoice();
    let response = "Computer choice: " + convertChoice(computer) + ", Player choice: " + convertChoice(player);
    if (player == computer) {
        response += "\n Draw!"; 
    }
    else if (player - 1 == computer || player + 2 == computer) { // player wins
        response += "\n You won the round!";
        playerScore++;
    } 
    else if (player + 1 == computer || player - 2 == computer) { // computer wins
        response += "\n You lost the round!";
        computerScore++;
    }
    response += "\n Scores: " + computerScore + " (computer), " + playerScore + " (you)"; 
    return response;
}

function playConsoleGame() {
    let playerScore = 0;
    let computerScore = 0;
    alert("Let's play!");
    while (playerScore + computerScore < 5) { // play for 5 rounds
        let response = playRound();
        if (response === "stop") {
            return;
        }
    }

    if (playerScore > computerScore) {
        alert("You won the game!");
    }
    else {
        alert("You lost the game!");
    }
}

function playGUIGame() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore + computerScore < 5) { // play for 5 rounds
        let response = playRound();
        if (response === "stop") {
            return;
        }
    }
}

// playConsoleGame();
