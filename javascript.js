// write function for player choice that prompts user to choose rock, paper, or scissors
    // it should take two inputs, player's choice and computer's choice
        //player's choice should be case insenstive
    // function should have a function within it for computer choice
     // write function for computer choice that randomly chooses rock, paper, or scissors


let choices = ["Rock", "Paper", "Scissors"]

//wil need to come back to see how this goes into playround
// let playerSelection  = prompt("Rock, Paper, Scissors? ");
let rockRegex = /rock/i;
let paperRegex = /paper/i;
let scissorsRegex = /scissors/i;
let result = "";
// console.log(computerSelection);

   function getPlayerChoice() {
        let playerSelection = prompt("Rock, Paper, Scissors? ")
        console.log("Player chose:", playerSelection);
        return playerSelection;
    }

     function getComputerChoice() {
        let computerChoice = choices[Math.floor(Math.random()*choices.length)];
        console.log("Computer chose:", computerChoice);
        // console.log(computerChoice);
        return computerChoice;
     }

     let playerScore = 0;
     let computerScore = 0;
     function playRound(getPlayerChoice, getComputerChoice) {
        if (rockRegex.test(getPlayerChoice)) {
            if (getComputerChoice == "Rock") {
                console.log("computer's score", computerScore);
                result = "It's a draw! You both had Rock";
                console.log(result);
                return result;
            } else if (getComputerChoice == "Paper") {
                // add score to computer since it won
                computerScore++;
                console.log("computer's score", computerScore);
                result = "You lose! Paper beats Rock";
                console.log(result);
                return result;
            } else if (getComputerChoice == "Scissors") {
                // add score to player since you won
                playerScore++;
                console.log("computer's score", computerScore);
                result = "You win! Rock beats Scissors";
                console.log(result);
                return result;
            }

        } else if (paperRegex.test(getPlayerChoice)) {
            if (getComputerChoice == "Rock") {
                // add score to player since you won
                playerScore++;
                console.log("computer's score",computerScore);
                result = "You win! Paper beats Rock";
                console.log(result);
                return result;
            } else if (getComputerChoice == "Paper") {
                console.log("computer's score", computerScore);
                result = "It's a draw! You both had Paper";
                console.log(result);
                return result;
            } else if (getComputerChoice == "Scissors") {
                // add score to computer since you won
                computerScore++;
                console.log("computer's score", computerScore);
                result = "You lose! Scissors beat Paper";
                console.log(result);
                return result;
            }

        } else if (scissorsRegex.test(getPlayerChoice)) {
            if (getComputerChoice == "Rock") {
                // add score to computer since you won
                computerScore++;
                console.log("computer's score", computerScore);
                result = "You lose! Rock beats Scissors";
                console.log(result);
                return result;
            } else if (getComputerChoice == "Paper") {
                // add score to player since you won
                playerScore++;
                console.log("computer's score", computerScore);
                result = "You win! Scissors beats Paper";
                console.log(result);
                return result;
            } else if (getComputerChoice == "Scissors") {
                result = "It's a draw! You both had Scissors";
                console.log(result);
                return result;
            }
        }
     }

     function game() {
        for (let i = 0; i < 5; i++) {
            playRound(getPlayerChoice(), getComputerChoice());
            console.log("Computer Score:", computerScore, "Your Score:", playerScore);
        }
        if (playerScore > computerScore) {
            console.log("You won the game!");
        } else if (playerScore < computerScore) {
            console.log("You lost, the computer won the game!");
        } else {
            console.log("It's a draw, no one won the game!");
        }
     }

     game();

// console.log(playRound(playerSelection, computerSelection));