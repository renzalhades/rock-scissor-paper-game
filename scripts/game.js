function computerSelection ()
    {   
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

function playerSelection ()
    {   
        let playerChoice = prompt ();
        return (playerChoice.toLowerCase());
    }

function oneRound (playerSelect, computerSelect)
    { 
        let result, winner;

        switch (true)
            {   
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

        // alert (result);
        console.log (playerSelect + "  " + computerSelect)
        return winner;
    }

function oneGame (roundLimit)
    {
        let winner = "";
            playerScore = 0, computerScore = 0;

        while ((playerScore <= roundLimit-1) && (computerScore <= roundLimit-1))
            {  
                let playerSelect = playerSelection (), computerSelect = computerSelection ();

                winner  = oneRound (playerSelect, computerSelect);

                if (winner  == "player")
                    {playerScore++;}

                else if (winner  == "computer")
                    {computerScore++;}

                else if (winner  == "draw")
                    {}
                // alert (playerScore + "   " + computerScore);
            }
    }

oneGame (3)


