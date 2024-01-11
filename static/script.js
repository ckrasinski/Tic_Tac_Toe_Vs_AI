document.addEventListener("DOMContentLoaded", function()
{
    let buttons = document.querySelectorAll(".TTTButton");
    let text = document.querySelector("h1").innerHTML;
    let player;
    let computer;
    if(text === "You've chosen X!")
    {
        player = "X";
        computer = "O";
    }
    else
    {
        player = "O";
        computer = "X";
    }

    let playerTurn = true;
    let gameOver = false;

    function checkTieOrWin()
    {
        let tie = true;
        if((buttons[0].value === buttons[1].value && buttons[1].value === buttons[2].value && buttons[2].value != "")
            || (buttons[3].value === buttons[4].value && buttons[4].value === buttons[5].value && buttons[5].value != "")
            || (buttons[6].value === buttons[7].value && buttons[7].value === buttons[8].value && buttons[8].value != "")
            || (buttons[0].value === buttons[3].value && buttons[3].value === buttons[6].value && buttons[6].value != "")
            || (buttons[1].value === buttons[4].value && buttons[4].value === buttons[7].value && buttons[7].value != "")
            || (buttons[2].value === buttons[5].value && buttons[5].value === buttons[8].value && buttons[8].value != "")
            || (buttons[0].value === buttons[4].value && buttons[4].value === buttons[8].value && buttons[8].value != "")
            || (buttons[2].value === buttons[4].value && buttons[4].value === buttons[6].value && buttons[6].value != ""))
        {
            if(playerTurn)
            {
                document.querySelector("h1").innerHTML = "PC Wins!";
                gameOver = true;
            }

            else
            {
                document.querySelector("h1").innerHTML = "Player Wins!";
                gameOver = true;
            }
        }

        for(let i = 0; i < buttons.length; i++)
        {
            if(buttons[i].value != "X" && buttons[i].value != "O")
            {
                tie = false;
            }
        }

        if(tie && !gameOver)
        {
            document.querySelector("h1").innerHTML = "Tie!";
            gameOver = true;
        }
    }

    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", function()
        {
            if((buttons[i].value != "X" || buttons[i].value != "O") && playerTurn && !gameOver)
            {
                buttons[i].innerHTML = player;
                buttons[i].style.padding = "45px";
                buttons[i].value = player;
                playerTurn = false;
            }
            checkTieOrWin();
            if(!playerTurn && !gameOver)
            {
                if(buttons[4].value != "X" && buttons[4].value != "O")
                {
                    buttons[4].innerHTML = computer;
                    buttons[4].style.padding = "45px";
                    buttons[4].value = computer;
                    playerTurn = true;
                }
                else
                {
                    while(true)
                    {
                        let position = parseInt(Math.random() * 9);
                        if(buttons[position].value != "X" && buttons[position].value != "O")
                         {
                            buttons[position].innerHTML = computer;
                            buttons[position].style.padding = "45px";
                            buttons[position].value = computer;
                            playerTurn = true;
                            break;
                        }
                    }
                }
            }
            checkTieOrWin();
        });
    }
});