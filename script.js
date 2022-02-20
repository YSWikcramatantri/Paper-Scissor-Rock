const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const description = document.querySelector('#description');

var playerSelection;
var x;
var playerPoints = 0;
var computerPoints = 0;

paper.addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
    });
scissors.addEventListener('click', () => {
    playerSelection = "scissor";
    playRound();
    });
rock.addEventListener('click', () => {
    playerSelection = "rock";
    playRound();
    });

function computerPlay() {
    const choices = ["paper", "scissor", "rock"];
    let y = choices[Math.floor(Math.random() * 3)];
    return y;
}
function playRound() {
    var computerSelection = computerPlay();
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            x = "Ah! You lost! Paper cover Rock!";
            computerPoints += 1;
        }
        if (computerSelection == "scissor") {
            x = "Hooray! You Won! Rock beat Scissor!";
            playerPoints += 1;
        }
        if (computerSelection == "rock") {
            x = "Tied! Do again!";
        }
    }
    if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            x = "Hooray! You Won! Scissor cut Paper!";
            playerPoints += 1;
        }
        if (computerSelection == "scissor") {
            x = "Tied! Do again!";
        }
        if (computerSelection == "rock") {
            x = "Ah! You lost! Rock beat Scissor!";
            computerPoints += 1;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            x = "Tied! Do again!";
        }
        if (computerSelection == "scissor") {
            x = "Ah! You lost! Scissor cut Paper!";
            computerPoints += 1;
        }
        if (computerSelection == "rock") {
            x = "Hooray! You Won! Paper cover Rock!";
            playerPoints += 1;
        }
    }
    document.getElementById("description").innerHTML = x;
}


