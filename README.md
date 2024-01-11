# TIC TAC TOE VS AI
#### Video Demo:  https://youtu.be/EBiSY5aUMHw
#### Description:
For the Final Project I implemented Tic Tac Toe VS AI.
In this Web Application we can try our best against computer in Tic Tac Toe.
There is main page when we can choose which sign do we want to use: X or O.
Then we can click on "Play!" button and we are redirected to the game page.
On this page after every move AI does it's own move.
If you win there will be displayed message: "Player wins!".
If computer wins - "PC wins!".
If it was tie - "Tie!".
There are also registration and login pages.
On registration page you have 3 inputs: "username", "password", "confirm password"
and button to submit.
If you enter valid data you are registered to index.html.
Else program with render template again.
On login page you have username and password inputs.
You also have to enter valid data.
For implementation I used Flask, Python, HTML, CSS, SQL and JavaScript.

In layout.html I created general structure in my page which I used in other templates.
In index.html I created form with 2 radiobuttons: "X" and "O". Then we click "Play!" button and we are redirected to the game.html page.
On game.html we will see the message on which sign did we want (It was send from index.html).
Below there are 9 buttons which were created by 3 rows of buttons.

Then we have styles.css file where I choosed good styles for my web application.
I made registration and login pages on the right, and link to my main page which says: "Tic Tac Toe VS AI" on the left. I made margin 20 pixels so pages look better. On each of the Tic Tac Toe buttons I made margin 1 pixel and padding 50 pixels so they were bigger. I also made padding 10 pixels for the navigation buttons. For hyperlinks I deleted underline and made font black so it better fits main style of the web application. For the navigation bar I darkened a little bit background color so you can distinguish between it and content of the page and also added padding 10 pixels so it looks better. For content of the page I aligned text to the center so it looks better. I also made font size 33 pixels for h2 tag, because i thought it's the best size.

In the script.js file I implemented Tic Tac Toe game using JavaScript. I loaded all the buttons of the page to the "buttons" variable. I made also "player" and "computer"
variables which represented player and computer signs ("O" or "X"). If player choosed "X" sign before variable "player" was set to "X" and computer to "O". If the other way around - reversed way. I also made variable "playerTurn" which says if it was player's turn or not. And I made "gameOver" variable which says if it was end of the game or not. I made function called "checkTieorWin" which checks if it was already win or tie in the game. When the user clicked on the button if it was not already taken by the computer or the player the button started displaying player's sign (suing innerHTML).
When the computer made move one of the free buttons also started displaying computer's sign. I used checkTieOrWin function after every computer's or player's move.
That's it! Hope you enjoyed reading that!
