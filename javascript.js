// write function for player choice that prompts user to choose rock, paper, or scissors
    // it should take two inputs, player's choice and computer's choice
        //player's choice should be case insenstive
    // function should have a function within it for computer choice
     // write function for computer choice that randomly chooses rock, paper, or scissors


let choices = ["Rock", "Paper", "Scissors"]
let computerSelection = getComputerChoice();

//wil need to come back to see how this goes into playround
// let playerSelection  = prompt("Rock, Paper, Scissors? ");
let rockRegex = /rock/i;
let paperRegex = /paper/i;
let scissorsRegex = /scissors/i;
let result = "";
// console.log(computerSelection);

    function getPlayerChoice() {
        prompt("Rock, Paper, Scissors? ")
    }

     function getComputerChoice() {
        let computerChoice = choices[Math.floor(Math.random()*choices.length)];
        // console.log(computerChoice);
        return computerChoice;
     }

     let playerScore = 0;
     let computerScore = 0;
     function playRound(playerSelection, computerSelection) {
        if (rockRegex.test(playerSelection)) {
            if (computerSelection == "Rock") {
                console.log(computerScore);
                return result = "It's a draw! You both had Rock";
            } else if (computerSelection == "Paper") {
                // add score to computer since it won
                computerScore++;
                console.log(computerScore);
                return result = "You lose! Paper beats Rock";
            } else if (computerSelection == "Scissors") {
                // add score to player since you won
                playerScore++;
                console.log(computerScore);
                return result = "You win! Rock beats Scissors";
            }

        } else if (paperRegex.test(playerSelection)) {
            if (computerSelection == "Rock") {
                // add score to player since you won
                playerScore++;
                console.log(computerScore);
                return result = "You win! Paper beats Rock";
            } else if (computerSelection == "Paper") {
                console.log(computerScore);
                return result = "It's a draw! You both had Paper";
            } else if (computerSelection == "Scissors") {
                // add score to computer since you won
                computerScore++;
                console.log(computerScore);
                return result = "You lose! Scissors beat Paper";
            }

        } else if (scissorsRegex.test(playerSelection)) {
            if (computerSelection == "Rock") {
                // add score to computer since you won
                computerScore++;
                console.log(computerScore);
                return result = "You lose! Rock beats Scissors";
            } else if (computerSelection == "Paper") {
                // add score to player since you won
                playerScore++;
                console.log(computerScore);
                return result = "You win! Scissors beats Paper";
            } else if (computerSelection == "Scissors") {
                return result = "It's a draw! You both had Scissors";
            }
        }
     }

     function game() {
        for (let i = 0; i < 2; i++) {
            console.log(result);
            getPlayerChoice();
            playRound();
            console.log("Computer Score:", computerScore, "Your Score:", playerScore);
        }
     }

     game();

// console.log(playRound(playerSelection, computerSelection));