let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const selection = prompt("Try your hand at Paper Rock Scissors. To being, type your selection: ");
    const humanchoice = selection.toLowerCase();
    console.log("You chose: " + humanchoice);
    return humanchoice;
}


function computerChoice() {
    const compSelection = Math.random();
    if (compSelection <= .33) {
        return "rock";
    } else if (compSelection <= .67) {
        return "paper";
    } else {
        return "scissors";
    } 
}

function playRound(humanChoice, compSelection) {
    console.log("Your opponent chose: " + compSelection);

    if (compSelection === humanChoice) {
        console.log("Draw");
    }    
    else if (compSelection === "rock" && humanChoice  === "paper") {
        console.log("You win! Paper beats rock.");
        humanScore++;   
    }
    else if (compSelection === "rock" && humanChoice  === "scissors") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;  
    }
    else if (compSelection === "paper" && humanChoice  === "rock") {
        console.log ("You lose! Paper beats rock.");
        computerScore++;  
    }
    else if (compSelection === "paper" && humanChoice  === "scissors") {
        console.log ("You win! Scissors beats paper.");
        humanScore++;
    }
    else if (compSelection === "scissors" && humanChoice === "paper") {
        console.log ("You lose! Scissors beat paper.");
        computerScore++;
    }
    else if (compSelection === "scissors" && humanChoice === "rock") {
        console.log ("You win! Rock beats scissors.");
        humanScore++;
    }

    console.log("The score is: you, " + humanScore + " vs Computer, " + computerScore);
}


function playGame() {
    playRound(getHumanChoice(), computerChoice());
    playRound(getHumanChoice(), computerChoice());
    playRound(getHumanChoice(), computerChoice());
    playRound(getHumanChoice(), computerChoice());
    playRound(getHumanChoice(), computerChoice());

    if (humanScore > computerScore) {
        console.log("You win! Congrats!")
    } else if (humanScore < computerScore) {
        console.log("You lose! Try again.")
    } else {
        console.log("Tie!")
    }
}

playGame(); 





