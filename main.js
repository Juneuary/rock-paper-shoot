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


// function singleRound(playerSelection, computerSelection) {
//     playerSelection = playerChoice();
//     computerSelection = computerChoice();
//     if (playerSelection == 'rock' && computerSelection =='paper') {
//         alert('you lost, sorry')
//     } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
//         alert('hehe, you win')
//     } else {
//         alert('Try again')
//     }
// }
//     singleRound()
// switch()

function oneRound (playerSelection, computerSelection) {
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    if (playerSelection == computerSelection) {
        alert('Try again')
    } else if (computerSelection =='rock') {
        return(playerSelection == 'paper') ? alert('hehe, you win!') : alert('awh, you lost')
    } else if (computerSelection == 'paper') {
        return(playerSelection == 'scissors') ? alert('hehe, you win!') : alert('awh, you lost')
    } else if (computerSelection == 'scissors') {
        return(playerSelection == 'rock') ? alert('hehe, you win!') : alert('awh, you lost')
    } else {
        alert('it is a tie')
    }
    console.log(oneRound())
}
oneRound()