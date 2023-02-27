let playerScore = 0
let compScore = 0
let playerScore_span = document.getElementById('player-score');
let compScore_span = document.getElementById('computer-score');
const scoreboard_div = document.getElementsByClassName('.score-board');
const result_div = document.querySelector('.result > p')
const rock_btn = document.querySelector('#rock')
const paper_btn = document.querySelector('#paper')
const scissors_btn = document.querySelector('#scissors')
const buttons = document.querySelectorAll('button')

function getComputerChoice () {
  const choices = ['rock', 'paper','scissors']
  const randomNum = Math.floor (Math.random()* 3);
return choices[randomNum];
}

 
function win(player,computer) {
  playerScore++;
playerScore_span.innerHTML = playerScore;
result_div.textContent= `You Won 🥳! ${player.toUpperCase()} beats  ${computer.toUpperCase()}`;
  compScore_span.innerHTML = compScore;

}
function lose(player, computer){
  compScore++;
  compScore_span.innerHTML = compScore;
result_div.textContent= `You Lost DUMMY 🤦‍♂️! ${computer.toUpperCase()}  beats  ${player.toUpperCase()}`;

}
function tie(){
result_div.textContent= `You Have Tied 🧍🏻‍♂️! Don't Give up!`

}
  

function game (playerChoice){
const compChoice = getComputerChoice ();
switch (playerChoice + compChoice){
  case "rockscissors":
  case "scissorspaper":
  case "paperrock":
  win(playerChoice, compChoice);
  break;

  case "scissorsrock":
  case "paperscissors":
  case "rockpaper":
  lose(playerChoice, compChoice);
  break; 
  case "paperpaper":
  case "rockrock":
  case "scissorsscissors":
  tie(playerChoice,compChoice);
  break;
}
}



function main(){
  rock_btn.addEventListener('click',function() {
  game('rock');
  })
  paper_btn.addEventListener('click',function() {
  game('paper');
  })
  scissors_btn.addEventListener('click',function() {
  game('scissors');
  })
}; 
main();