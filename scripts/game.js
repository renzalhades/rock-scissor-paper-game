let computerScore = 0;
let playerScore = 0;
let scoreLimit = 5;
let overAllWinner = "";

const choicePaper = document.querySelector ('button#paper');
const choiceRock = document.querySelector ('button#rock');
const choiceScissor = document.querySelector ('button#scissor');
const playerScoreBoard = document.querySelector ('.player-color div.player-score');
const computerScoreBoard = document.querySelector ('.computer-color div.player-score');
const modalOverlay = document.querySelector ('div.overlay');
const restartModal = document.querySelector ('div.restart-modal');
const restartModalResult = document.querySelector ('div.game-result');
const restartButton = document.querySelector ('button.restart');

computerScoreBoard.textContent = computerScore;
playerScoreBoard.textContent = playerScore;

choicePaper.addEventListener ('click', () => oneRound('paper'));
choiceRock.addEventListener ('click', () => oneRound ('rock'));
choiceScissor.addEventListener ('click', () => oneRound ('scissor'));
restartButton.addEventListener ('click', () => closeModal ());

function oneRound (playerSelect)
    { 
        let result, winner;
        let computerSelect = computerSelection ();

        switch (true) {   
            case (playerSelect == computerSelect):
                result = "Draw!";
                winner = "draw";
                break;

            case ((playerSelect == "scissor" && computerSelect == "paper") || 
                (playerSelect == "rock" && computerSelect == "scissor") || 
                (playerSelect == "paper" && computerSelect == "rock") ):
                result = "You Win! " + playerSelect + " beats " + computerSelect + "." ;
                winner = "player";
                break;

            case ((computerSelect == "scissor" && playerSelect == "paper") || 
                (computerSelect == "rock" && playerSelect == "scissor") || 
                (computerSelect == "paper" && playerSelect == "rock") ):
                result = "You Lose! " + computerSelect + " beats " + playerSelect + ".";
                winner = "computer";
                break;

            default:
                result = "Invalid Choice!"
                break;
        }
     
        updateScore (winner);
        checkStatus (playerScore, computerScore);

        console.log ("Player: " + playerScore);
        console.log ("Computer: " + computerScore);

    }

function computerSelection () {   
    let computerChoice;
    computerChoice = parseInt (Math.random ()*3);
    switch (computerChoice)
        {
            case (0):
                computerChoice = "paper";
                break;
            case (1):
                computerChoice = "scissor";
                break;
            case (2):
                computerChoice = "rock";
                break;
        }
    return computerChoice;    
}
    
function checkStatus (playerScore, computerScore) {   
    
    if (playerScore == scoreLimit || computerScore == scoreLimit) {
        showModal (playerScore,computerScore);
        updateScoreBoard (playerScore,computerScore);
    }

    else {
        updateScoreBoard (playerScore, computerScore);
    }
}

function updateScore (winner) {
    if (winner == "player") {
        playerScore++;
    }
    else if (winner == "computer") {
        computerScore++;
    }
    else {}

}

function updateScoreBoard (playerScore,computerScore) {
    computerScoreBoard.textContent = computerScore;
    playerScoreBoard.textContent = playerScore;
}

function showModal (playerScore, computerScore) {  
    if (playerScore > computerScore) {
        restartModalResult.textContent = "YOU WIN!!!";
        restartModal.classList.toggle ('player-color');
    }

    else if (playerScore < computerScore) {
        restartModalResult.textContent = "YOU LOSE!!!";
        restartModal.classList.toggle ('computer-color');
    }

    modalOverlay.classList.toggle ('active');
    restartModal.classList.toggle ('active');
}

function closeModal (){
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard (playerScore,computerScore)
    restartModal.classList.remove ('player-color');
    restartModal.classList.remove ('computer-color');
    modalOverlay.classList.remove ('active');
    restartModal.classList.remove ('active');
}
function hideModal (){
    restartModal.classList.toggle ('player-color');
    restartModal.classList.toggle ('computer-color');
    modalOverlay.classList.toggle ('active');
    restartModal.classList.toggle ('active');
}

