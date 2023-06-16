document.addEventListener("DOMContentLoaded", function(){

  let rock = document.querySelector(".rock");
  let paper = document.querySelector(".paper");
  let scissors = document.querySelector(".scissors");
  
  function getComputerChoice() {
    let choices = [rock, paper, scissors];
    return choices[Math.floor(Math.random() * choices.length)];
  }
rock.addEventListener("click", playRound)

function game(rounds = 5) {
  let y_score = querySelector(".your-score");
  let c_score = querySelector(".computer-score")
  let rounds = querySelector(".rounds");

  let your_score = 0;
  let computer_score = 0;

  for (let i = 1; i <= rounds; i++) {
    let play_value = playRound();
    alert(play_value);
    if (play_value) {
      s.textContent += your_score++;
      c_score.textContent += 0;
    } else if (play_value.includes("Lose")) {
      s.textContent += your_score = 0;
      c_score.textContent += computer_score++;
    } else if(play_value.includes("Draw") || play_value === undefined || play_value === null){
      s.textContent += your_score = 0;
      c_score.textContent += computer_score = 0;
    }
  }
}


function playRound(event) {
  let computerSelection = getComputerChoice();
  let playerChoice = event.target;

  if (playerChoice === rock && computerSelection === scissors) {
    return win_result();
  } else if (playerChoice === rock && computerSelection === paper) {
    return lose_result();
  } else if (playerChoice === computerSelection) {
    return draw_result();
  } else if (playerChoice === paper && computerSelection === scissors) {
    return lose_result();
  } else if (playerChoice === paper && computerSelection === rock) {
    return win_result();
  } else if (playerChoice === scissors && computerSelection === rock) {
    return lose_result();
  } else if (playerChoice === scissors && computerSelection === paper) {
    return win_result();
  } else {
    return alert("Please provide a valid input");
  }
}
})
  
function win_result() {
  let play = document.querySelector(".play");
  let result = document.createElement("p");
  result.textContent = "You Win";
  play.appendChild(result);
}
function lose_result() {
  let play = document.querySelector(".play");
  let result = document.createElement("p");
  result.textContent = "You Lose";
  play.appendChild(result);
}
function draw_result() {
  let play = document.querySelector(".play");
  let result = document.createElement("p");
  result.textContent = "You Draw";
  play.appendChild(result);
}



  /*
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
      }
    
      alert(`Your score is ${your_score}`);
  
      your_score = 0;
      computer_score = 0;
    }
    
    game();
    */


