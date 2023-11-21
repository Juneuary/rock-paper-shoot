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


const playerSelection = playerChoice();
const computerSelection = computerChoice();
console.log(oneRound(playerSelection, computerSelection))



let playerCount = 0;
let computerCount = 0;
// for (let playerCount = 0; playerCount <= 5; playerCount++) {
function game() {
  if (console.log('you won ouput: ' + oneRound(playerSelection,computerSelection)) == 'hehe, you win') {
    console.log(++playerCount);
   
  } else if (console.log('you lost output: ' + oneRound(playerSelection,computerSelection)) == 'awh, you lost') {
    ++computerCount;
    console.log(computerCount)
  }
}
game()


/*
I want to create a game function that will keep track of player selection wins of 5 games
I neeed a function that will keep track of player selection wins from 5 games and will run 5 times
    keep track of wins
        create a variable or function called player score and computer score
        if 
    run 5 times 

create a function game
call oneRound function
if return is hehe you win, console.log
else if return is awh you lost, console.log 
console.log('n round: ' + result )
switch(oneRound) {
    case 'hehe you won':
        ++playerscore
        console.log(playerscore);
        break;
    case 'awh, you lost':
        
}

a function that will play the game 5 times
after each game, it will console log the winner
*/ 

