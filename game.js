    function computerPlay() {

        let randNum = Math.floor(Math.random() * 3);
        let moves = ['Rock', 'Paper', 'Scissors'];

        return moves[randNum];
    }

    
function playRound(caseInsensitive, computerSelection) {
    caseInsensitive = caseInsensitive.toLowerCase(); 
    playerWins = 'Player is the winner'
    compWins = 'Computer is the winner'
    tie = "Tie! Play again!"
    switch(computerSelection) {
        case 'Rock':
          if (caseInsensitive = 'Rock') {
              return tie

          } else if (caseInsensitive = 'Paper') {
              return playerWins
              
          } else {
              console.log('Computer is the winner!')
              return compWins
          }
          break;
        case 'Paper':
            if (caseInsensitive = 'Rock') {
                return compWins
              } else if (caseInsensitive = 'Paper') {
                return tie
              } else {
                return playerWins
              }
          break;
        case 'Scissors':
            if (caseInsensitive = 'Rock') {
             return playerWins
              } else if (caseInsensitive = 'Paper') {
                 
              } else {
                return tie
              }

          break;
      }

      function game() {

        for (let i = 0; i < 6; i++) {

          let choice = [];
            choice[i]= prompt("Player please enter your first choice? Rock, Paper, or Scissors?")
            result = playRound(choice[i],computerSelection);
        }
        return result;
      }
}

