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