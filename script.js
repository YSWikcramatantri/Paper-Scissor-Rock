var computerSelection = computerPlay();
var x;

function computerPlay() {
    const choices = ["paper", "scissor", "rock"];
    let y = choices[Math.floor(Math.random() * 3)];
    return y;
}
function playRound(computerSelection) {
    var playerSelection = prompt("What is your Choice? (paper, scissor, rock)").toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            x = "Ah! You lost! Paper beat Rock!";
        }
        if (computerSelection == "scissor") {
            x = "Hooray! You Won! Rock beat Scissor!";
        }
        if (computerSelection == "rock") {
            x = "Tied! Do again!";
        }
    }
    if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            x = "Hooray! You Won! Scissor beat Paper!";
        }
        if (computerSelection == "scissor") {
            x = "Tied! Do again!";
        }
        if (computerSelection == "rock") {
            x = "Ah! You lost! Rock beat Scissor!";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            x = "Tied! Do again!";
        }
        if (computerSelection == "scissor") {
            x = "Ah! You lost! Scissor beat Paper!";
        }
        if (computerSelection == "rock") {
            x = "Hooray! You Won! Paper beat Rock!";
        }
    }
    console.log(x);
}
function game() {
    for (let index = 0; index < 5; index++) {
        playRound(computerSelection);
    }
}

game()
