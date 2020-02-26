function computerPlay() {
  const moves = ['Rock', 'Paper', 'Scissors'];
  let randNum = Math.floor(Math.random() * moves.length);
  let compChoice = moves[randNum];
  return compChoice;
    }
function playRound(playerSelection, computerSelection) {
    caseInsensitive = playerSelection.toLowerCase(); 
    playerWins = 'Player is the winner';
    compWins = 'Computer is the winner';
    tie = "Tie! Play again!";
    

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


function game() 
{
  let numberRounds = prompt("How many rounds would you like to play the game for?");
  

  for (let i = 1; i <= numberRounds; i++) 
  {
    let userInput = prompt("Choose between Rock, Paper, or Scissors");
    let roundWinner = playRound(userInput,computerPlay());
    alert(roundWinner);
  }
}
game();





