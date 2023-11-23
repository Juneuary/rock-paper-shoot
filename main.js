//  Function for computer choice 
function  computerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random()*choices.length);
    computerResult = choices[randomIndex];
    console.log('tester for computerChoice ' + computerResult);
    return computerResult;
}


// function for user via prompt input
function playerChoice() {
    const myChoice = prompt("Choose your Fighter", "Rock, paper, or scissors").toLowerCase();
   if (myChoice !== 'rock' && myChoice !== 'scissors' && myChoice !== 'paper') {
    alert('That is an invalid choice') 
   } else {
    console.log('tester for myChoice ' + myChoice);
    return myChoice
   }
}

// function for a single round of RPS
const playerSelection = playerChoice();
const computerSelection = computerChoice();
function oneRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'A draw!'
    } else if (computerSelection =='rock') {
        return(playerSelection == 'paper') ? 'hehe, you win!' : 'awh, you lost'
    } else if (computerSelection == 'paper') {
        return(playerSelection == 'scissors') ? 'hehe, you win!' : 'awh, you lost'
    } else if (computerSelection == 'scissors') {
        return(playerSelection == 'rock') ? 'hehe, you win!' : 'awh, you lost'
    } 
    
    
}

console.log(oneRound('tester for oneRound(): ' + playerSelection, computerSelection))


let playerCount = 0;
let computerCount = 0;

function game() {
   const result = oneRound(playerSelection,computerSelection);

  if (result == 'hehe, you win') {
     ++playerCount;
     console.log('player score: ' + playerCount)
  } else if (result  == 'awh, you lost') {
    ++computerCount;
    console.log('computerScore: '+ computerCount)
  }
  console.log('Result: ' + result)
}

for (let i = 0; i < 3; ++i){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    game()
}
game()
console.log('player: ' + playerCount + ', Computer: ' + computerCount)
