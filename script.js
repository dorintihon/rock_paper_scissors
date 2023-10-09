function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

let playerScore = 0;
let computerScore = 0;

function updateScoreDiv() {
    return playerScore + " : " + computerScore;
}

function announceWinner(){
    if (playerScore === 5) {
        return "Congratulations! You won the game!";
    } else if (computerScore === 5) {
        return "Sorry, the computer won the game.";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScoreDiv();
    document.querySelector('.resultDiv').textContent = "Please choose"
    document.querySelector('.scoreDiv').textContent = "";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

     if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore += 1;
        return "You Lose!" + computerSelection + " beats " + playerSelection;

    } else if (computerSelection === "Rock" && playerSelection === "Paper"){
        playerScore += 1;
        return "You win! Paper beats Rock"
    } else if (playerSelection === "Scissor" && computerSelection === "Rock"){
        computerScore += 1;
        return "You Lose!" + computerSelection + " beats " + playerSelection;
    } else if (computerSelection === "Scissor" && playerSelection === "Rock"){
        playerScore += 1;
        return "You win! Rock beats Scissor"
    }else if (playerSelection === "Paper" && computerSelection === "Scissor"){
        computerScore += 1;
        return "You Lose!" + computerSelection + " beats " + playerSelection;
    } else if(computerSelection === "Paper" && playerSelection === "Scissor"){
        playerScore += 1;
        return "You win! Scissor beats Paper"
    } else{
        return "It's a tie!"
    }

}

function endGame(){
    if (playerScore === 5 || computerScore === 5){
        const winner = announceWinner();
        document.querySelector('.resultDiv').textContent = winner;
        var againMenu = document.createElement('div');
        var yesButton = document.createElement('button');
        againMenu.textContent = 'Do you want to play again?'
        yesButton.textContent = 'Yes';
        againMenu.appendChild(yesButton);
        document.body.appendChild(againMenu);
        yesButton.addEventListener('click', function() {
            resetGame();
            document.body.removeChild(againMenu);
        });
       
    }
}


window.onload = function() {
    
    var rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    rockButton.addEventListener('click', function() {
        const result = playRound('Rock', getComputerChoice());
        document.querySelector('.resultDiv').textContent = result;
        const score = updateScoreDiv();
        document.querySelector('.scoreDiv').textContent = score;
         
        endGame();
    });

    var paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    paperButton.addEventListener('click', function() {
        const result = playRound('Paper', getComputerChoice());
        document.querySelector('.resultDiv').textContent = result;
        const score = updateScoreDiv();
        document.querySelector('.scoreDiv').textContent = score;

        endGame();
    });

    var scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    scissorsButton.addEventListener('click', function() {
        const result = playRound('Scissor', getComputerChoice());
        document.querySelector('.resultDiv').textContent = result;
        const score = updateScoreDiv();
        document.querySelector('.scoreDiv').textContent = score;

        endGame();
    });

    var resultDiv = document.createElement('div');
    resultDiv.className = 'resultDiv';
    resultDiv.textContent = "Please choose";

    var scoreDiv = document.createElement('div');
    scoreDiv.className = 'scoreDiv';
    



    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(scissorsButton);
    document.body.appendChild(resultDiv);
    document.body.appendChild(scoreDiv);

}
