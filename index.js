document.addEventListener("DOMContentLoaded", function() {
  let rock = document.querySelector(".rock");
  let paper = document.querySelector(".paper");
  let scissors = document.querySelector(".scissors");
  let your_score = document.querySelector(".your-value-score");
  let computer_score = document.querySelector(".computer-value-score");
  let rounds = document.querySelector(".round-value");
  let play = document.querySelector(".play");

  function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  let your_score_value = 0;
  let computer_score_value = 0;
  let rounds_value = 5;

  function game(event) {
    let playerChoice = event.target.className;
    let computerSelection = getComputerChoice();
    let result;

    if (playerChoice === computerSelection) {
      result = "Draw";
    } else if (
      (playerChoice === "rock" && computerSelection === "scissors") ||
      (playerChoice === "paper" && computerSelection === "rock") ||
      (playerChoice === "scissors" && computerSelection === "paper")
    ) {
      result = "Win";
      your_score_value++;
    } else {
      result = "Lose";
      computer_score_value++;
    }

    your_score.textContent = your_score_value;
    computer_score.textContent = computer_score_value;
    rounds_value--;

    play.textContent = `You chose ${playerChoice}, computer chose ${computerSelection}. Result: ${result}`;
    play.classList.add("play-result");

    rounds.textContent = rounds_value;

    if (rounds_value === 0) {
      rock.removeEventListener("click", game);
      paper.removeEventListener("click", game);
      scissors.removeEventListener("click", game);
    }
  }

  rock.addEventListener("click", game);
  paper.addEventListener("click", game);
  scissors.addEventListener("click", game);
});
