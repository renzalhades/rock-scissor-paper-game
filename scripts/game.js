function computerSelection ()
{   
    var computerSelect;
    computerSelect = parseInt (Math.random ()*3);
    switch (computerSelect)
        {
            case (0):
                computerSelect = "paper";
                break;
            case (1):
                computerSelect = "scissor";
                break;
            case (2):
                computerSelect = "rock";
                break;
        }
    return computerSelect;    
}

function gameRound (playerSelect)
{
    playerSelect = playerSelect.toLowerCase();
    let result, outcome, computerSelect = computerSelection ();

    switch (true)
        {   
            case (playerSelect == computerSelect):
                result = "Draw!";
                break;

            case ((playerSelect == "scissor" && computerSelect == "paper") || 
                  (playerSelect == "rock" && computerSelect == "scissor") || 
                  (playerSelect == "paper" && computerSelect == "rock") ):
                result = "You Win! " + playerSelect + " beats " + computerSelect + "." ;
                break;

            case ((computerSelect == "scissor" && playerSelect == "paper") || 
                (computerSelect == "rock" && playerSelect == "scissor") || 
                (computerSelect == "paper" && playerSelect == "rock") ):
                result = "You Lose! " + computerSelect + " beats " + playerSelect + ".";
                break;
        }

    console.log (result);
}

gameRound ("scissor");

