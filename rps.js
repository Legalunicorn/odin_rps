
const playerChoices = document.querySelectorAll('.option');
const roundResult = document.querySelector('#roundResult');
const gameResult = document.querySelector('#gameResult')
const score = document.querySelector('#score');
let computerChoice,playerChoice;
let playerScore=0,computerScore=0;


function getComputerChoice(){
    //get random number from 0-2
    let ranint = Math.floor(Math.random()*3);
    if (ranint==0){
        return 'rock';
    }
    else if (ranint==1){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function fight(playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    switch (true){
        case (playerChoice==computerChoice):
            roundResult.textContent = `Tie! both players has chosen ${playerChoice}`;
            break;

        case (playerChoice=='rock' && computerChoice =='scissors'):
        case (playerChoice=='paper' && computerChoice =='rock'):
        case (playerChoice=='scissors' && computerChoice=='paper'):
            roundResult.textContent = `Amazing! ${playerChoice} beats ${computerChoice}`;
            playerScore += 1;
            break;

        default:
            roundResult.textContent = `Too bad! ${computerChoice} beats ${playerChoice}`;
            computerScore += 1;


    }
}

function playRound(){
    //get computer choice
    computerChoice = getComputerChoice()
    playerChoices.forEach((choice)=>{
        choice.addEventListener('click',()=>{
            playerChoice = choice.id;
            computerChoice = getComputerChoice();

            fight(playerChoice,computerChoice);
            score.textContent = `You: ${playerScore} | Bot: ${computerScore}`;
            
            if (playerScore==5 || computerScore==5){
                //end the game
                if (playerScore==5){
                    gameResult.textContent = 'Congrats you have won!'
                }
                else {
                    gameResult.textContent = 'Too bad! The computer has won!'
                }

                playerScore = 0;
                computerScore = 0;
                score.textContent = 'You:0 | Bot:0';
            }


        })
    })

}
playRound();