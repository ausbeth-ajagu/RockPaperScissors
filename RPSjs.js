const div = document.querySelector(".options");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const whowonEach = document.querySelector(".whowonEach");
const finalWinner = document.querySelector(".finalWinner");

const buttonRock = document.querySelector(".rock");



const buttonPaper = document.querySelector(".paper");


const buttonScissors = document.querySelector(".scissors");


//game below

//function for computer to pick randomly rock paper or scissors// 
let computerSelection = "";
let playerSelection = "";
let whoWon = "";
let gameWinner = "";
let scoreComputer = 0;
let scorePlayer = 0;
let round = 1;

function computerPlay() {
    //randomly generate number between 1 and 3
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 1) {
        computerSelection = "ROCK"
    } else if (computerChoice == 2) {
        computerSelection = "PAPER";
    } else {
        computerSelection = "SCISSORS";
    }
    return computerSelection;
}

computerPlay()
//if 1, rock, 2, paper, 3 scissors etc
//based on number, console.log

//plays a round 
function playerChoice() {
    buttonRock.onclick = function () {
        playerSelection = "ROCK";
    }
    buttonPaper.onclick = function () {
        playerSelection = "PAPER";
    }
    buttonScissors.onclick = function () {
        playerSelection = "SCISSORS";
    }
    return playerSelection;

}

playerChoice();


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {

        if (computerSelection == "PAPER") {
            whoWon = "You Lose! Computer Chose Paper! Paper Beats Rock!"
        } else if (computerSelection == "ROCK") {
            whoWon = "It's a tie! You both chose Rock!"
        } else {
            whoWon = "You Win! Computer chose Scissors! Rock Beats Scissors!"
        }

    }
    if (playerSelection == "PAPER") {

        if (computerSelection == "SCISSORS") {
            whoWon = "You Lose! Computer chose Scissors! Scissors Beats Paper!"
        } else if (computerSelection == "PAPER") {
            whoWon = "It's a tie! You both chose Paper!"
        } else {
            whoWon = "You Win! Computer chose Rock! Paper Beats Rock!"
        }

    }

    if (playerSelection == "SCISSORS") {

        if (computerSelection == "ROCK") {
            whoWon = "You Lose! Computer chose Rock! Rock Beats Scissors!"
        } else if (computerSelection == "SCISSORS") {
            whoWon = "It's a tie! You both chose Scissors!"
        } else {
            whoWon = "You Win! Computer chose Scissors! Scissors Beats Paper!"
        }

    }


    return whoWon;
}


//play 5 round game
//keep score, report winner at the end
function game() {
    // while round < 5, playround
    
    computerPlay();
    playerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));


    if (whoWon == "You Win! Computer chose Scissors! Rock Beats Scissors!" || whoWon == "You Win! Computer chose Rock! Paper Beats Rock!" || whoWon ==
        "You Win! Computer chose Scissors! Scissors Beats Paper!") {
        scorePlayer = scorePlayer + 1;

        //if player wins a round, scorePlayer ++         
    }

    if (whoWon == "You Lose! Computer chose Rock! Rock Beats Scissors!" || whoWon == "You Lose! Computer Chose Paper! Paper Beats Rock!" || whoWon ==
        "You Lose! Computer chose Scissors! Scissors Beats Paper!") {
        scoreComputer = scoreComputer + 1;
        // if computer wins a round, scoreComputer ++
    }
   


    //if scorePlayer > scoreComputer, gamewinner = "Player Won! score is (scorePlayer)"
    if (scorePlayer == 5) {
        gameWinner =
            `Congrats, You Won! Your Score is ${scorePlayer} to the Computer's ${scoreComputer} .`
            
    } else if (scoreComputer == 5) {
        //if scorecomputer > scorePlayer, gamewinner = "Computer Won! score is (scoreComputer)"
        gameWinner =
            `Sorry, You Lost! The Computer's Score is ${scoreComputer} to your ${scorePlayer} .`
        
        }

    finalWinner.textContent = gameWinner;
    whowonEach.textContent = whoWon;
    playerScore.textContent = `Your current Score: ${scorePlayer}.`;
    computerScore.textContent = `Computer's Current Score: ${scoreComputer}. `;
    console.log(gameWinner);
    
    if (scorePlayer == 5 || scoreComputer == 5) {
        div.removeEventListener("click", game);
    }
        
        
   
}
game()
div.addEventListener("click", game);





console.log(div);