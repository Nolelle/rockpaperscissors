function computerPlay() {
  const moves = ['Rock', 'Paper', 'Scissors'];
  let randNum = Math.floor(Math.random() * moves.length);
  return moves[randNum];
    }
function playRound(playerSelection, computerSelection) {
    caseInsensitive = playerSelection.toLowerCase(); 
    playerWins = 'Player is the winner';
    compWins = 'Computer is the winner';
    tie = "Tie! Play again!";
    let computer = computerSelection;
    let playerCounter = 0;
    let compCounter = 0;
   

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
let playerCounter = 0;
let compCounter = 0;
function scoreCounter(winner) {
  

  if (winner === 'Player is the winner') 
  {
    playerCounter++;
  } else if (winner == 'Computer is the winner')
  {
    compCounter++;
  }

  return 'Player:' + playerCounter + ' Computer: ' + compCounter;
}

function game() 
{
  let numberRounds = prompt("How many times would you like to play the game?");
  for (let i = 0; i <= numberRounds; i++) 
  {
    let userInput = prompt("Choose between Rock, Paper, or Scissors");
    let roundWinner = playRound(userInput,computerPlay());
    alert(roundWinner);
    i++;
  }
  let score = scoreCounter(roundWinner);
  alert(score);
  playerCounter = 0;
  compCounter = 0;
}

game();





