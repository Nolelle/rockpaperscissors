function computerPlay() {
    randNum = Math.floor(Math.random() * 3);
    moves = [Rock, Paper, Scissors];

    return moves[randNum];
}

function playRound(playerSelection, computerSelection) {
	// your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))