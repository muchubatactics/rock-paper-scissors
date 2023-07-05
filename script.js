console.log("hello word");

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice)
    {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors'
    }
}

function capitalize( str )
{
    str = str.toLowerCase();
    let temp = str.substr(0, 1);
    temp = temp.toUpperCase();
    str = str.substr(1, str.length - 1);
    return ( temp + str );
}

function playRound( playerSelection, computerSelection )
{
    playerSelection = capitalize( playerSelection );

    if ( playerSelection === computerSelection )
    {
        return "It's a draw!";
    }
    
    if ( playerSelection === 'Rock' )
    {
        if ( computerSelection === 'Paper' )
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
    
    if ( playerSelection == 'Paper' )
    {
        if ( computerSelection === 'Scissor' )
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }   

    if ( playerSelection == 'Scissor' )
    {
        if ( computerSelection === 'Rock' )
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }   
}

function game()
{
    let decider = 0;
    let playerSelection; 
    let computerSelection; 
    for ( let i = 0; i < 5; i++ )
    {
        playerSelection = prompt("Enter your choice", "rock, paper or scissor");
        computerSelection = getComputerChoice();

        if ( playRound ( playerSelection, computerSelection ) === 1 )
        {
            decider++;
            console.log("You Win this round!");
        }
        else 
        {
            console.log("You LOSE this round!");
        }
    }

    if ( decider > 2 )
    {
        console.log("Yeyy, YOU WIN!!");
    }
    else
    {
        console.log("haha, LOSER!!");
    }
}

game();