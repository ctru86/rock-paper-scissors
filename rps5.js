    let userScore = 0
    let computerScore = 0 

    
    function getComputerPick() {
        let number = Math.random(); 
        if (number <=.33) {
            return "rock";
        }
        else if (number <= .66) {
            return "scissors";
        }
        else {
            return "paper";
        }
    }


    function playRound(user, computer) {

                if (user === computer) {
                    console.log ("draw! the score is, you: " + userScore + " vs computer: " + computerScore);
                }
                else if (user === "rock" && computer === "scissors") {
                    userScore++; 
                    console.log ("you win! the score is, you: " + userScore + " vs computer: " + computerScore);
                }   
                else if (user === "rock" && computer === "paper") {
                    computerScore++; 
                    console.log ("you lose! the score is, you: " + userScore + " vs computer: " + computerScore);
                }
                else if (user === "paper" && computer === "scissors") {
                    computerScore++; 
                    console.log ("you lose! the score is, you: " + userScore + " vs computer: " + computerScore);
                }
                else if (user === "paper" && computer === "rock") {
                    userScore++; 
                    console.log ("you win! the score is, you: " + userScore + " vs computer: " + computerScore);
                }
                else if (user === "scissors" && computer === "paper") {
                    userScore++; 
                    console.log ("you win! the score is, you: " + userScore + " vs computer: " + computerScore);
                }
                else if (user === "scissors" && computer === "rock") {
                    computerScore++; 
                    console.log ("you lose the score is, you: " + userScore + " vs computer: " + computerScore);
                }
                
                if (userScore === 5) endGame("🎉 You");
                else if (computerScore === 5) endGame("💀 Computer");

            }

        
        const buttons = document.querySelectorAll("#buttonbox button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const userChoice = button.id;
                const computerChoice = getComputerPick();

                playRound(userChoice, computerChoice);

                const playerBoard = document.querySelector("#player");
                const computerBoard = document.querySelector("#computer");

               
                const playerChoiceDiv = document.createElement("div");
                playerChoiceDiv.textContent = `${userChoice}`;

                const computerChoiceDiv = document.createElement("div");
                computerChoiceDiv.textContent = `${computerChoice}`;

                
                playerBoard.appendChild(playerChoiceDiv);
                computerBoard.appendChild(computerChoiceDiv);

            });
        });

        function endGame(winner) {
        alert(`${winner} wins the game!`);
        document.querySelectorAll("#buttonbox button").forEach(btn => btn.disabled = true);

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        document.body.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            userScore = 0;
            computerScore = 0;
            document.querySelector("#player").innerHTML = "player";
            document.querySelector("#computer").innerHTML = "computer";
            playAgain.remove();
            document.querySelectorAll("#buttonbox button").forEach(btn => btn.disabled = false);
        });
        }
