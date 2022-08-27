// write function for player choice that prompts user to choose rock, paper, or scissors
    // it should take two inputs, player's choice and computer's choice
        //player's choice should be case insenstive
    // function should have a function within it for computer choice
     // write function for computer choice that randomly chooses rock, paper, or scissors


let choices = ["Rock", "Paper", "Scissors"]
let computerSelection = getComputerChoice();
let playerSelection  = "";


     function getComputerChoice() {
        let computerChoice = choices[Math.floor(Math.random()*choices.length)];
        return computerChoice;
     }


     function playRound(playerSelection, computerSelection) {

     }

