let userScore = 0
let computerScore = 0 

function getHumanScore() {
    return prompt("type rock, paper, or scissors.").toLowerCase();
}


function getComputerScore() {
    let number = Math.random(); 
    console.log(number);
    if (number <=.33) {
        return "rock";
    }
    else if (number <= .66) {
        return "scissors"
    }
    else {
        return "paper"
    }
}


function playRound(){
    let user = getHumanScore(); 
    console.log("you chose: " + user); 
    let computer = getComputerScore(); 
    console.log("computer chose: " + computer);
    if (user === computer) {
        return ("draw! the score is, you: " + userScore + " vs computer: " + computerScore);
    }
    else if (user === "rock" && computer === "scissors") {
        userScore++; 
        return ("you win! the score is, you: " + userScore + " vs computer: " + computerScore);
    }   
   else if (user === "rock" && computer === "paper") {
        computerScore++; 
        return ("you lose! the score is, you: " + userScore + " vs computer: " + computerScore);
    }
    else if (user === "paper" && computer === "scissors") {
        computerScore++; 
        return ("you lose! the score is, you: " + userScore + " vs computer: " + computerScore);
    }
    else if (user === "paper" && computer === "rock") {
        userScore++; 
        return ("you win! the score is, you: " + userScore + " vs computer: " + computerScore);
    }
    else if (user === "scissors" && computer === "paper") {
        userScore++; 
        return ("you win! the score is, you: " + userScore + " vs computer: " + computerScore);
    }
    else if (user === "scissors" && computer === "rock") {
        computerScore++; 
        return ("you lose the score is, you: " + userScore + " vs computer: " + computerScore);
    }
    else {
        return "error, must enter rock, paper, or scissors. refresh browser to play again.";
    }
}

function playGame() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())

    if (userScore > computerScore) {
        return "congrats! you win!"
    } 
    else if (userScore < computerScore) {
        return "you lost the match, try again!"
    }
    else {
        return "tie score!"
    }
}

let outcome = playGame(); 
console.log(outcome);





