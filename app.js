const userChoiceDisplay = document.querySelector("#user-choice");
let computerChoiceDisplay = document.querySelector("#computer-choice");
const resultDisplay = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const options = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;

buttons.forEach(button => button.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    displayResult();
}));

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * options.length);
    computerChoice = options[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function displayResult() {
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":    
            resultDisplay.innerHTML = "You win!";
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            resultDisplay.innerHTML = "You lose!";
            break;
        default:
            resultDisplay.innerHTML = "It's a draw!";
            break;
    }
}
