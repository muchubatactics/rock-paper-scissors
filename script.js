/*
    To see within, is to feel without a light
    muchubatactics 13/08/23
*/

let scoreHuman = 0;
let scoreMachine = 0;

let [x, y] = document.querySelectorAll(".box > .text");

let humanSelection = document.querySelector(".humsel");
let compSelection = document.querySelector(".compsel");
let result = document.querySelector(".result");

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice)
    {
        case 1:
            compSelection.textContent = "Rock";
            return 'Rock';
        case 2:
            compSelection.textContent = "Paper";
            return 'Paper';
        case 3:
            compSelection.textContent = "Scissors";
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
    humanSelection.textContent = playerSelection;

    if ( playerSelection === computerSelection )
    {
        return;
    }
    
    if ( playerSelection === 'Rock' )
    {
        if ( computerSelection === 'Paper' )
        {
            y.textContent = String(++scoreMachine);
            // return;
        }
        else
        {
            x.textContent = String(++scoreHuman);
            // return ;
        }
    }
    
    if ( playerSelection == 'Paper' )
    {
        if ( computerSelection === 'Scissors' )
        {
            y.textContent = String(++scoreMachine);
            // return;
        }
        else
        {
            x.textContent = String(++scoreHuman);
            // return;
        }
    }   

    if ( playerSelection == 'Scissors' )
    {
        if ( computerSelection === 'Rock' )
        {
            y.textContent = String(++scoreMachine);
            // return;
        }
        else
        {
            x.textContent = String(++scoreHuman);
            // return;
        }
    }
    
    if ( scoreHuman == 5 )
    {
        result.textContent = "YOU WIN!!";
        end();
    }
    else if ( scoreMachine == 5 )
    {
        result.textContent = "YOUR LOSS";
        end();
    }

}



let btns = Array.from(document.querySelectorAll("button"));
console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("here");
        if (scoreHuman < 5 && scoreMachine < 5)
        {
            playRound(btn.textContent, getComputerChoice());
        }
    });
});

function end()
{
    setTimeout(() => {
        result.textContent = "";
        scoreHuman = 0;
        scoreMachine = 0;
        x.textContent = String(scoreHuman);
        y.textContent = String(scoreMachine);
        compSelection.textContent = "";
        humanSelection.textContent = "";
    }, 3000);
}
