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
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice != "rock" || humanChoice != "paper" || humanChoice != "scissors") {
        console.log(`error! you've brought a ${humanChoice} to a rock-paper-scissors fight.`)
        return;
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        console.log(`you win! ${humanChoice} beats ${computerChoice}.`)
    }
    else {
        console.log(`you lose! ${computerChoice} beats ${humanChoice}.`)
    }
}