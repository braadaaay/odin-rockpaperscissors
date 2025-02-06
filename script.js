function getComputerChoice() {
    return Math.ceil(Math.random() * 3);
}

function getPlayerChoice() {
    let choice = Math.ceil(parseInt(prompt(`Enter a number to play:
        1: Rock
        2: Paper
        3: Scissors
        `)));
    if (choice != "") {
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

function playRound(player, computer) {
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
    else {
        throw "idk";
    }
    response += "\n Scores: " + computerScore + " (computer), " + playerScore + " (you)"; 
    alert(response);
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
    // Main Loop
    while (playerScore + computerScore < 5) { // play for 5 rounds
        let playerOutput = getPlayerChoice();
        if (!playerOutput) {
            alert("No choice selected!")
        }
        else if (playerOutput > 3) {
            alert("Invalid choice!")
        }
        else if (String(playerOutput).toLowerCase() == "stop") {
            break
        }
        else {
            playRound(playerOutput, getComputerChoice());
        }
    }

    if (playerScore > computerScore) {
        alert("You won the game!");
    }
    else {
        alert("You lost the game!");
    }
}

alert("Let's play!");
playGame();

/*
Psudocode:

Prompt the user for a number: 1 = Rock, 2 = Paper, 3 = Scissors, round up and limit to 3. 

Have the computer decide a random guess.

Create a function to compare both numbers using the following algorithm:
-If numbers are the same, game is a draw
-If player number is 1 more or 2 less than computer, player wins
-If computer number is 1 more or 2 less than player, computer wins

Convert the numbers to strings for the user to see.
*/