let computerScore = 0;
let playerScore = 0;
let scoreLimit = 5;
let overAllWinner = "";
let roundResult = document.querySelector ('div.round-result'); 

const choicePaper = document.querySelector ('button#paper');
const choiceRock = document.querySelector ('button#rock');
const choiceScissor = document.querySelector ('button#scissor');
const restartButton = document.querySelector ('button.restart');
const choiceHistoryPlayer = document.querySelector ('ol.choice-history-player');
const choiceHistoryComputer = document.querySelector ('ol.choice-history-computer');


choicePaper.addEventListener ('click', () => oneRound('paper'));
choiceRock.addEventListener ('click', () => oneRound ('rock'));
choiceScissor.addEventListener ('click', () => oneRound ('scissor'));
restartButton.addEventListener ('click', () => closeModal ());

updateScoreBoard (playerScore,computerScore);

function oneRound (playerSelect)
    { 
        let result, winner;
        let computerSelect = computerSelection ();
        

        addChoiceHistory (playerSelect,computerSelect);

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
        setTimeout(showResult (winner,result), 3000);
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

function  showResult (winner,result) {
    let roundResult = document.querySelector ('div.round-result');   
    roundResult.classList.remove ('player-color', 'computer-color');
    
    if (winner == 'player') {
        roundResult.textContent = result ;
        roundResult.classList.add ('active', 'player-color');
    }
    else if (winner == 'computer') {
        roundResult.textContent = result ;
        roundResult.classList.add ('active', 'computer-color');
        
    }
    else {
        roundResult.textContent = result ;
        roundResult.classList.add ('active');
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
    
function checkStatus (playerScore, computerScore) {   
    
    if (playerScore == scoreLimit || computerScore == scoreLimit) {
        showModal (playerScore,computerScore);
        updateScoreBoard (playerScore,computerScore);
    }

    else {
        updateScoreBoard (playerScore, computerScore);
    }
}

function updateScoreBoard (playerScore,computerScore) {
    const playerScoreBoard = document.querySelector ('.player-color div.player-score');
    const computerScoreBoard = document.querySelector ('.computer-color div.player-score');
   
    computerScoreBoard.textContent = computerScore;
    playerScoreBoard.textContent = playerScore;
}

function addChoiceHistory (playerSelect, computerSelect) {

    const createComputerHistory = document.createElement ('li');
    const createPlayerHistory = document.createElement ('li');

    if (computerSelect == 'rock') {
       createComputerHistory.classList.add ('fa-hand-back-fist', 'fa-solid', 'computer-color', 'fa-rotate-90');
    }
    else if (computerSelect == 'paper') {
        createComputerHistory.classList.add ('fa-hand', 'fa-solid', 'computer-color', 'fa-rotate-90');
    }
    else {
        createComputerHistory.classList.add ('fa-hand-scissors', 'fa-flip-horizontal', 'fa-solid', 'computer-color', 'fa-rotate-90');
    }

    if (playerSelect == 'rock') {
        createPlayerHistory.classList.add ('fa-hand-back-fist', 'fa-solid', 'player-color', 'fa-rotate-90');
    }
    else if (playerSelect == 'paper') {
        createPlayerHistory.classList.add ('fa-hand', 'fa-solid', 'player-color', 'fa-rotate-90');
    }
    else {
        createPlayerHistory.classList.add ('fa-hand-scissors', 'fa-flip-horizontal', 'fa-solid', 'player-color', 'fa-rotate-90' );
    }
    
    choiceHistoryComputer.appendChild (createComputerHistory);
    choiceHistoryPlayer.appendChild (createPlayerHistory);
}

function showModal (playerScore, computerScore) {  
    const modalOverlay = document.querySelector ('div.overlay');
    const restartModal = document.querySelector ('div.restart-modal');
    const restartModalResult = document.querySelector ('div.game-result');

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

function closeModal () {
    const modalOverlay = document.querySelector ('div.overlay');
    const restartModal = document.querySelector ('div.restart-modal');

    playerScore = 0;
    computerScore = 0;
    updateScoreBoard (playerScore,computerScore)
    restartModal.classList.remove ('player-color');
    restartModal.classList.remove ('computer-color');
    modalOverlay.classList.remove ('active');
    restartModal.classList.remove ('active');
    choiceHistoryComputer.innerHTML = '';
    choiceHistoryPlayer.innerHTML = '';
    roundResult.classList.remove ('active', 'player-color','computer-color');
}



