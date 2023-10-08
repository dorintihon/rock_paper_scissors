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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    let resultMessage = '';
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


window.onload = function() {
    var rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    rockButton.addEventListener('click', function() {
        const result = playRound('Rock', getComputerChoice());
        document.querySelector('.resultDiv').textContent = result;
        const score = updateScoreDiv();
        document.querySelector('.scoreDiv').textContent = score;
    });

    var paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    paperButton.addEventListener('click', function() {
        const result = playRound('Paper', getComputerChoice());
        document.querySelector('.resultDiv').textContent = result;
        const score = updateScoreDiv();
        document.querySelector('.scoreDiv').textContent = score;
    });

    var scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    scissorsButton.addEventListener('click', function() {
        const result = playRound('Scissor', getComputerChoice());
        document.querySelector('.resultDiv').textContent = result;
        const score = updateScoreDiv();
        document.querySelector('.scoreDiv').textContent = score;
    });

    var resultDiv = document.createElement('div');
    resultDiv.className = 'resultDiv'

    var scoreDiv = document.createElement('div');
    scoreDiv.className = 'scoreDiv';
    



    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(scissorsButton);
    document.body.appendChild(resultDiv);
    document.body.appendChild(scoreDiv);


}

// function game(){
//     for (let i = 0; i < 5; i++){
//        let playerSelection = prompt("Select rock paper or scissor");
//        const computerSelection = getComputerChoice();
//        console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();