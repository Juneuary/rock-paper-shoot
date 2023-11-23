//  Function for computer choice 
function  computerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random()*choices.length);
    computerResult = choices[randomIndex];
    console.log('computerChoice: ' + computerResult);
    return computerResult;
}


// function for user via prompt input
function playerChoice() {
    const myChoice = prompt("Choose your Fighter", "Rock, paper, or scissors").toLowerCase();
   if (myChoice !== 'rock' && myChoice !== 'scissors' && myChoice !== 'paper') {
    alert('That is an invalid choice') 
   } else {
    console.log('myChoice: ' + myChoice);
    return myChoice;
   }
}

// function for a single round of RPS
// const playerSelection = playerChoice();
// const computerSelection = computerChoice();
function oneRound () {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

    if (playerSelection === computerSelection) {
        return 'A draw!'
    } else if (computerSelection =='rock') {
        return(playerSelection == 'paper') ? 'hehe, you win!' : 'awh, you lost'
    } else if (computerSelection == 'paper') {
        return(playerSelection == 'scissors') ? 'hehe, you win!' : 'awh, you lost'
    } else if (computerSelection == 'scissors') {
        return(playerSelection == 'rock') ? 'hehe, you win!' : 'awh, you lost'
    }    
}


function game() {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 3; i++) {
        let result = oneRound();
        console.log('result is ' + result)
        if (result == 'hehe, you win!') {
           ++playerCount;
        //    console.log('player score: ' + playerCount)
        } else if (result  == 'awh, you lost') {
          ++computerCount;
        //   console.log('computerScore: '+ computerCount)
        } 

    }
    console.log(`player: ${playerCount} computer: ${computerCount}`);
    
//    const result = oneRound();

//   console.log('Result: ' + result)
}

game()

// for (let i = 0; i < 2; ++i){
//     const playerSelection = playerChoice();
//     const computerSelection = computerChoice();
//     game()
// }
// console.log('player: ' + playerCount + ', Computer: ' + computerCount)
