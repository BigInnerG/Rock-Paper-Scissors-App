// script.js
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resultTextEl = document.getElementById("result-text");
buttons.forEach(button => {
button.addEventListener("click", () => {
const playerChoice = button.getAttribute("data-choice");
const computerChoice = getComputerChoice();
const result = getResult(playerChoice, computerChoice);
playerChoiceEl.textContent = playerChoice;
computerChoiceEl.textContent = computerChoice;
resultTextEl.textContent = result;
});
});
function getComputerChoice() {
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}
function getResult(player, computer) {
if (player === computer) return "It's a Draw!";
if (
(player === "rock" && computer === "scissors") ||
(player === "paper" && computer === "rock") ||
(player === "scissors" && computer === "paper")
) {
return "You Win!";
}
return "You Lose";
}