const signs = ["Rock", "Paper", "Scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
const tieScoreDisplay=document.getElementById("tieScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


function playGame(playerchoice){
    const computerChoice = signs[Math.floor(Math.random() * 3)];
    let result="";

    if(playerchoice==computerChoice){
        result= "IT's a Tie!";
    }
    else{
        switch(playerchoice){
            case "Rock":
                result= (computerChoice === "Scissors") ? "You Win!" : "You Lose!";

                break;
            case "Paper":
                result= (computerChoice === "Rock") ? "You Win!" : "You Lose!";
                break;
             case "Scissors":
                result= (computerChoice === "Oaper") ? "You Win!" : "You Lose!";
                break;
                
        }
    }

    playerDisplay.textContent= `Player : ${playerchoice}`;
    computerDisplay.textContent= `Computer : ${computerChoice}`;
    resultDisplay.textContent= result;

    resultDisplay.classList.remove("greenText" , "redText", "yellowText")

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT's a Tie!":
            resultDisplay.classList.add("yellowText");
            tieScore++;
            tieScoreDisplay.textContent = tieScore;
            break;
    }

}