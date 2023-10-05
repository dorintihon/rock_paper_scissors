function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

     if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose!" + computerSelection + " beats " + playerSelection;
    } else if (computerSelection === "Rock" && playerSelection === "Paper"){
        return "You win! Paper beats Rock"
    } else if (playerSelection === "Scissor" && computerSelection === "Rock"){
        return "You Lose!" + computerSelection + " beats " + playerSelection;
    } else if (computerSelection === "Scissor" && playerSelection === "Rock"){
        return "You win! Rock beats Scissor"
    }else if (playerSelection === "Paper" && computerSelection === "Scissor"){
        return "You Lose!" + computerSelection + " beats " + playerSelection;
    } else if(computerSelection === "Paper" && playerSelection === "Scissor"){
        return "You win! Scissor beats Paper"
    } else{
        return "It's a tie!"
    }

}

function game(){
    for (let i = 0; i < 5; i++){
       let playerSelection = prompt("Select rock paper or scissor");
       const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
    }
}

game();