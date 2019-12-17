function computerPlay() {
  let randNum = Math.floor(Math.random() * moves.length);
  const moves = ['Rock', 'Paper', 'Scissors'];
  
  return moves[randNum];
    }
function playRound(playerSelection, computerSelection) {
    caseInsensitive = playerSelection.toLowerCase(); 
    playerWins = 'Player is the winner';
    compWins = 'Computer is the winner';
    tie = "Tie! Play again!"

    switch(computerSelection) {
      case 'Rock':
        if (caseInsensitive === 'Rock') {
            return tie;
  
        } else if (caseInsensitive === 'Paper') {
            return playerWins;
            
        } else {
            return compWins;
        }
        break;
      case 'Paper':
          if (caseInsensitive === 'Rock') {
              return compWins;
            } else if (caseInsensitive === 'Paper') {
              return tie;
            } else {
              return playerWins;
            }
        break;
      case 'Scissors':
          if (caseInsensitive === 'Rock') {
              return playerWins;
            } else if (caseInsensitive === 'Paper') {
               return compWins;
            } else {
              return tie;
            }
  
        break;
    }  
   
}

function game() {
  for (let i = 0; i < 6; i++) {

  }
  return result;
}


const buttons = document.querySelectorAll('button');

buttons.forEach(button => { 
  button.addEventListener('click', playRound);
});



