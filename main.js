//  Function for computer choice 
 function  computerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random()*choices.length);
    computerResult = choices[randomIndex];
    console.log(computerResult);
    return computerResult;
}
computerChoice()

