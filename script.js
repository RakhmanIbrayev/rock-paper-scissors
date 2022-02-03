const figures = ["Rock", "Paper", "Scissors"];
const MAX_ROUNDS = 5;
let userPoints = 0;
let computerPoints = 0;

function computerPlay () {
    return figures[getRandomInt(figures.length)];
}

function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}

function determineWinner (figureOne, figureTwo) {
    if (figureOne === "Paper" && figureTwo === "Rock" ||
        figureOne === "Scissors" && figureTwo === "Paper" ||
        figureOne === "Rock" && figureTwo === "Scissors") {
        return true;
    }
    return false;
}

function showRoundMessage (winner, loser) {
    return winner + (winner === "Scissors" ? " beat " : " beats ") + loser;
}

function playOneRound (userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "Draw";
    } else if (determineWinner(userSelection, computerSelection)) {
        userPoints++;
        return showRoundMessage(userSelection, computerSelection);
    }
    computerPoints++;
    return showRoundMessage(computerSelection, userSelection);
}

const scoreBoardTitle = document.querySelector(".score-board-title");
const userWeapon = document.querySelector(".human .choice");
const computerWeapon = document.querySelector(".computer .choice");
const userScore = document.querySelector(".human span");
const computerScore = document.querySelector(".computer span");
let computerSelection;


function findWeaponEmoji (selection) {
    if (selection === "Rock") {
        return "✊";
    } else if (selection === "Paper") {
        return "🤚"
    }
    return "✌";
}

function game (userSelection) {
    computerSelection = computerPlay();
    userWeapon.textContent = findWeaponEmoji(userSelection);
    computerWeapon.textContent = findWeaponEmoji(computerSelection);
    scoreBoardTitle.textContent = playOneRound(userSelection, computerSelection);
    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    let index = 0;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === button) {
            index = i;
        }
    }

    button.addEventListener("click", () => {
        game(figures[index]);
    });
});