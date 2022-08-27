// write function for player choice that prompts user to choose rock, paper, or scissors
    // it should take two inputs, player's choice and computer's choice
        //player's choice should be case insenstive
    // function should have a function within it for computer choice
     // write function for computer choice that randomly chooses rock, paper, or scissors


let choices = ["Rock", "Paper", "Scissors"]
let computerSelection = getComputerChoice();
let playerSelection  = prompt("Rock, Paper, Scissors? ");
let rockRegex = /rock/i;
let paperRegex = /paper/i;
let scissorsRegex = /scissors/i;
// console.log(computerSelection);

     function getComputerChoice() {
        let computerChoice = choices[Math.floor(Math.random()*choices.length)];
        return computerChoice;
     }


     function playRound(playerSelection, computerSelection) {
        if (rockRegex.test(playerSelection)) {
            if (computerSelection == "Rock") {
                return console.log("It's a draw! You both had Rock");
            } else if (computerSelection == "Paper") {
                return console.log("You lose! Paper beats Rock");
            } else if (computerSelection == "Scissors") {
                return console.log("You win! Rock beats Scissors");
            }

        } else if (paperRegex.test(playerSelection)) {
            if (computerSelection == "Rock") {
                return console.log("You win! Paper beats Rock");
            } else if (computerSelection == "Paper") {
                return console.log("It's a draw! You both had Paper");
            } else if (computerSelection == "Scissors") {
                return console.log("You lose! Scissors beat Paper");
            }

        } else if (scissorsRegex.test(playerSelection)) {
            if (computerSelection == "Rock") {
                return console.log("You lose! Rock beats Scissors");
            } else if (computerSelection == "Paper") {
                return console.log("You win! Scissors beats Paper");
            } else if (computerSelection == "Scissors") {
                return console.log("It's a draw! You both had Scissors");
            }

        }
     }

playRound(playerSelection, computerSelection);