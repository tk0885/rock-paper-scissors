const body = document.querySelector('body');
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';

const div = document.createElement('div');
const p = document.createElement('p');
div.append(p);


body.append(btnRock, btnPaper, btnScissors, div);

let playerScore = 0;

btnRock.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection);
});




const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3); // <--output should be 0, 1, or 2
    if (randomNum === 0) return 'rock';
    else if (randomNum === 1) return 'paper';
    else return 'scissors';
}

const playRound = (playerSelection, computerSelection) => {
    if (playerScore === 5) {
        gameOver();
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            div.textContent = `You Lose! Paper beats Rock. Your score is ${playerScore}`;
        } else if (computerSelection === 'scissors') {
            playerScore++;
            div.textContent = `You Win! Rock beats Scissors. Your score is ${playerScore}`;
        } else {
            div.textContent = `It's a tie. Your score is ${playerScore}`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            div.textContent = `You Lose! Scissors beats Paper. Your score is ${playerScore}`;
        } else if (computerSelection === 'rock') {
            playerScore++;
            div.textContent = `You Win! Paper beats Rock. Your score is ${playerScore}`;
        } else {
            div.textContent = `It's a tie. Your score is ${playerScore}`;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            div.textContent = `You Lose! Rock beats Scissors. Your score is ${playerScore}`;
        } else if (computerSelection === 'paper') {
            playerScore++;
            div.textContent = `You Win! Scissors beats Paper. Your score is ${playerScore}`;
        } else {
            div.textContent = `It's a tie. Your score is ${playerScore}`;
        }
    }

}

const gameOver = () => {
    div.textContent = 'You win! Game Over'
    playerScore = 0;
    computerScore = 0;
}

