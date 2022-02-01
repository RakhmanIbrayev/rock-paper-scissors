const figures = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
let userPoints = 0;
let computerPoints = 0;

function computerPlay () {
    return figures[getRandomInt(figures.length)];
}

function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}

function formatString (myString) {
    return myString.toLowerCase();
}

function determineWinner (figureOne, figureTwo) {
    if (figureOne === "paper" && figureTwo === "rock") {
        return true;
    } else if (figureOne === "scissors" && figureTwo === "paper") {
        return true;
    } else if (figureOne === "rock" && figureTwo === "scissors") {
        return true;
    }
    return false;
}

function playOneRound (userSelection, computerSelection) {
    let formattedUserSelection = formatString(userSelection);

    if (formattedUserSelection === computerSelection) {
        return "Draw";
    } else if (determineWinner(formattedUserSelection, computerSelection)) {
        userPoints++;
        return formattedUserSelection + " beats " + computerSelection;
    }

    computerPoints++;
    return computerSelection + " beats " + formattedUserSelection; 
}

function game () {
    for (let i = 0; i < MAX_ROUNDS; i++) {
        let userSelection = prompt("Enter Your Choice");
        let computerSelection = computerPlay();

        console.log(playOneRound(userSelection, computerSelection));
        console.log("User: " + userPoints);
        console.log("Computer: " + computerPoints);
    }

    // find a winner here, whoever has more points wins!!!
    if (userPoints > computerPoints) {
        console.log("Congrats, you win!!!");
    } else if (userPoints < computerPoints) {
        console.log("Ha-Ha, you lose");
    } else {
        console.log("Good game, its a draw");
    }
}

const scoreBoardTitle = document.querySelector(".score-board-title");
const userWeapon = document.querySelector(".human .choice");
const computerWeapon = document.querySelector(".computer .choice");
const userScore = document.querySelector(".human span");
const computerScore = document.querySelector(".computer span");
let computerSelection;


function findWeaponEmoji (selection) {
    if (selection === "rock") {
        return "✊";
    } else if (selection === "paper") {
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