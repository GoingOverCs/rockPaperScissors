let playerOneScore = 0;
let computerScore = 0;
const playerScore_span = document.querySelector('#player-one-score');
const computerScore_span = document.querySelector('#cpu-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');

function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber];
}

function capatilize(word) {
    if (word === 'rock')
    return 'Rock';
    if (word === 'paper')
    return 'Paper';
    return 'Scissors';
   
}
function win(player, cpu) {
    const smallWordPlayer= "player".fontsize(3).sub();
    const smallWordCpu = "cpu".fontsize(3).sub();
    const player_div = document.getElementById(player);
    playerOneScore++;
    playerScore_span.innerHTML = playerOneScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capatilize(player)} ${smallWordPlayer} destroys ${capatilize(cpu)}. ${smallWordCpu} You win!`
    player_div.classList.add('green-glow');
    setTimeout(function() {player_div.classList.remove('green-glow')}, 400);
}

function lose(player,cpu) {
    const smallWordPlayer = "player".fontsize(3).sub();
    const smallWordCpu = "cpu".fontsize(3).sub();
    const player_div = document.getElementById(player);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capatilize(player)} ${smallWordPlayer} gets obilterated by  ${capatilize(cpu)}. ${smallWordCpu} You lose!`
    player_div.classList.add('red-glow');
    setTimeout(function() {player_div.classList.remove('red-glow')}, 400);
}

function draw(player,cpu) {
    const smallWordPlayer = "player".fontsize(3).sub();
    const smallWordCpu = "cpu".fontsize(3).sub();
    const player_div = document.getElementById(player);
    result_p.innerHTML = `${capatilize(player)} ${smallWordPlayer} loves ${capatilize(cpu)}. ${smallWordCpu} You both lose!`
    player_div.classList.add('gray-glow');
    setTimeout(function() {player_div.classList.remove('gray-glow')}, 400);
}

function game(playerChoice) {
    const computerChoice = getCpuChoice();
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerChoice, computerChoice);
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            lose(playerChoice, computerChoice);
            break;
        default:
            draw(playerChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener ('click', () => game('rock'));
    paper_div.addEventListener ('click', () => game('paper'));
    scissors_div.addEventListener ('click', () => game('scissors'));
}

main();