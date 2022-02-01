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

game();