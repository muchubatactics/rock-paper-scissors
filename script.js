console.log("hello word");
let scoreHuman = 0;
let scoreMachine = 0;

let [x, y] = document.querySelectorAll(".box > .text");

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
    console.log(playerSelection);

    if ( playerSelection === computerSelection )
    {
        return;
    }
    
    if ( playerSelection === 'Rock' )
    {
        if ( computerSelection === 'Paper' )
        {
            y.textContent = String(++scoreMachine);
            return;
        }
        else
        {
            x.textContent = String(++scoreHuman);
            return ;
        }
    }
    
    if ( playerSelection == 'Paper' )
    {
        if ( computerSelection === 'Scissors' )
        {
            y.textContent = String(++scoreMachine);
            return;
        }
        else
        {
            x.textContent = String(++scoreHuman);
            return;
        }
    }   

    if ( playerSelection == 'Scissors' )
    {
        if ( computerSelection === 'Rock' )
        {
            y.textContent = String(++scoreMachine);
            return;
        }
        else
        {
            x.textContent = String(++scoreHuman);
            return;
        }
    }   
}

let btns = Array.from(document.querySelectorAll("button"));
console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("here");
        playRound(btn.textContent, getComputerChoice());
    });
});