    function computerPlay() {

        randNum = Math.floor(Math.random() * 3);
        moves = ['Rock', 'Paper', 'Scissors'];

        return moves[randNum];
    }

    console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
	
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))