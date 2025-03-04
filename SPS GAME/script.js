// Get references to the buttons and result elements
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");
const resetButton = document.getElementById("reset-btn");

const choices = ['rock', 'paper', 'scissors'];
// Function to get computer's choice randomly
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}

// Event listeners for user choices
document.getElementById("rock").addEventListener("click", function () {
    const userChoice = 'rock';
    const computerChoice = getComputerChoice();
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;
    resultMessage.textContent = getWinner(userChoice, computerChoice);
});

document.getElementById("paper").addEventListener("click", function () {
    const userChoice = 'paper';
    const computerChoice = getComputerChoice();
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;
    resultMessage.textContent = getWinner(userChoice, computerChoice);
});

document.getElementById("scissors").addEventListener("click", function () {
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;
    resultMessage.textContent = getWinner(userChoice, computerChoice);
});

// Reset the game
resetButton.addEventListener("click", function () {
    userChoiceSpan.textContent = '';
    computerChoiceSpan.textContent = '';
    resultMessage.textContent = '';
});
