
function computerSelection(CS){
    let getComputerChoice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return getComputerChoice[random];
}

function playerSelection(PS){
    let playerAnswer = prompt("Rock, Paper, Scissors!");
    playerAnswer = playerAnswer.charAt(0).toUpperCase()+ playerAnswer.slice(1);
    return playerAnswer;
} 

function playRound(playerSelection, computerSelection){
    let PS = playerSelection();
    let CS = computerSelection();
    if (CS == "Rock")
        if      (PS == "Rock")
        {
            console.log("It's a tie!");
        } 
        else if (PS =="Saper")
        {
            console.log("You win!");
        } 
        else if (PS == "Scissors"){
            console.log("You lose!");
        }

    if (CS == "Paper")
        if      (PS == "Paper")
        {
            console.log("It's a tie!");
        } 
        else if (PS =="Scissors")
        {
            console.log("You win!");
        }
        else if (PS == "Rock"){
            console.log("You lose!");
        }

    if (CS == "Scissors")
        if      (PS == "Scissors")
        {
            console.log("It's a tie!");
        } 
        else if (PS =="Rock")
        {
            console.log("You win!");
        } 
        else if (PS == "Paper"){
            console.log("You lose!");
        }
}

console.log(playRound(playerSelection, computerSelection));

// let compChoice = ["Rock", "Paper", "Scissors"];

// function getComputerChoice() {
//   let randIndex = Math.floor(Math.random() * 3);
//   return compChoice[randIndex];
// }

// function playerSelection() {
//   let playerChoice = window.prompt("Let's play Rock, Paper, Scissors! :D");
//   playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
//   return playerChoice;
// }

// function playRound(getComputerChoice, playerSelection) {
//   let computerChoice = getComputerChoice();
//   let playerChoice = playerSelection();

//   if (computerChoice === "Rock") {
//     if (playerChoice === "Rock") {
//         console.log("It's a draw!");
//     } else if (playerChoice === "Paper") {
//         console.log("You win! Paper beats Rock");
//     } else if (playerChoice === "Scissors") {
//         console.log("You lose! Rock beats Scissors");
//     }
//   } else if (computerChoice === "Paper") {
//     if (playerChoice === "Rock") {
//         console.log("You lose! Paper beats Rock");
//     } else if (playerChoice === "Paper") {
//         console.log("It's a draw!");
//     } else if (playerChoice === "Scissors") {
//         console.log("You win! Scissors beats Paper");
//     }
//   } else if (computerChoice === "Scissors") {
//     if (playerChoice === "Rock") {
//         console.log("You win! Rock beats Scissors");
//     } else if (playerChoice === "Paper") {
//         console.log("You lose! Scissors beats Paper");
//     } else if (playerChoice === "Scissors") {
//         console.log("It's a draw!");
//     }
//   }
// }

// console.log(playRound(playerSelection, getComputerChoice));