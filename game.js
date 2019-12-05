    function computerPlay() {

        let randNum = Math.floor(Math.random() * 3);
        let moves = ['Rock', 'Paper', 'Scissors'];

        return moves[randNum];
    }

    console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
	if (playerSelection = 'Rock' && computerSelection = 'Paper') {
        let winner = 'Computer Wins!'
    } else if (playerSelection = 'paper' && computerSelection = 'Scissors') {
        let winner
    }
}

const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))