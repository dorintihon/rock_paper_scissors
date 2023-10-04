function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    return choice;
}

console.log(getComputerChoice())