function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(computerSelection = getComputerChoice()) {
    let playerSelection = prompt("Rock, Paper, or Scissors");
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
  
    if (playerSelectionLower === "rock" && computerSelectionLower === "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (playerSelectionLower === "rock" && computerSelectionLower === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelectionLower === computerSelectionLower) {
      return "You Draw!";
    } else if (playerSelectionLower === "paper" && computerSelectionLower === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (playerSelectionLower === "paper" && computerSelectionLower === "rock") {
      return "You Win! Paper beats Rock";
    } else if (playerSelectionLower === "scissors" && computerSelectionLower === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (playerSelectionLower === "scissors" && computerSelectionLower === "paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "Please provide a valid input";
    }
  }
  
  function game(rounds = 5) {
    let your_score = 0;
    let computer_score = 0;
  
    for (let i = 1; i <= rounds; i++) {
      let play_value = playRound();
      alert(play_value);
      if (play_value.includes("Win")) {
        your_score++;
        computer_score = 0;
      } else if (play_value.includes("Lose")) {
        your_score = 0;
        computer_score++;
      } else if(play_value.includes("Draw") || play_value === undefined || play_value === null){
        your_score = 0;
        computer_score = 0;
      }
      else {
        your_score = 0;
        computer_score = 0;
      }
    }
  
    alert(`Your score is ${your_score}`);
  }
  
  game();
  