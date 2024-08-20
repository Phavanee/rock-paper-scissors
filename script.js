// rock - 0
// paper - 1
// scissors - 2

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.round(Math.random()) + Math.round(Math.random());
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(humanChoice) {
    prompt("what will be your move?", humanChoice);
    return humanChoice.toLowerCase();
}

