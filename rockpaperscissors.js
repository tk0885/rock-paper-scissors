const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3); // <--output should be 0, 1, or 2
    if (randomNum === 0) return 'rock';
    else if (randomNum === 1) return 'paper';
    else return 'scissors';
}

const getPlayerChoice = () => {
    const playerInput = prompt('Enter rock, paper or scissors');
    if (!playerInput) return alert('Goodbye');
    if (playerInput.toLowerCase() === 'rock') return 'rock';
    else if (playerInput.toLowerCase() === 'paper') return 'paper';
    else if (playerInput.toLowerCase() === 'scissors') return 'scissors';
}

const playRound = (playerSelection, computerSelection) => {
    const playerToLower = playerSelection.toLowerCase();
    let log = '';

    if (playerToLower === 'rock') {
        if (computerSelection === 'paper') {
            log = 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            log = 'You Win! Rock beats Scissors';
        } else {
            log = "It's a tie";
        }
    } else if (playerToLower === 'paper') {
        if (computerSelection === 'scissors') {
            log = 'You Lose! Scissors beats Paper';
        } else if (computerSelection === 'rock') {
            log = 'You Win! Paper beats Rock';
        } else {
            log = "It's a tie";
        }
    } else if (playerToLower === 'scissors') {
        if (computerSelection === 'rock') {
            log = 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            log = 'You Win! Scissors beats Paper';
        } else {
            log = "It's a tie";
        }
    }

    return alert(log);
}


// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

const game = () => {

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    alert('Thank you for playing!')

}



game();