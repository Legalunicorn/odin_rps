function getComputerChoice(){
    //get random number from 0-2
    let ranint = Math.floor(Math.random()*3);
    if (ranint==0){
        return 'Rock';
    }
    else if (ranint==1){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}


function fight(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection=='invalid'){
        return 'You have chosen an invalid option!'
    }

    // first settle ties
    if (playerSelection==computerSelection){
        return `TIE! Both players have picked ${playerSelection}`;
    }
    else if (playerSelection=='rock'){
        //computer is either paper of sc
        return (computerSelection=='paper') ? 'You lose! Paper beats rock' : 'You win! Rock beats scissors!';
    }
    else if (playerSelection=='paper'){
        //computer is either paper of sc
        return (computerSelection=='scissors') ? 'You lose! Scissors beats Paper' : 'You win! Paper beats rock!';
    }
    else if (playerSelection=='scissors'){
        //computer is either paper of sc
        return (computerSelection=='rock') ? 'You lose! rock beats scissors' : 'You win! scissors beats paper!';
    }
}

let result;
function game(){
    for (let i=0;i<5;i++){
        let playerSelection = prompt('Choose rock, paper, or scissors!','invalid');
        result = fight(playerSelection,getComputerChoice());
        console.log(result);
    }
    

}
game();