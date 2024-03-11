
// const rock = document.createElement('button');
// rock.id = 'Rock';
// rock.textContent = 'Rock';
// rockbtn.appendChild(rock);

// const paper = document.createElement('button');
// paper.id = 'Paper'
// paper.textContent = 'Paper';
// paperbtn.appendChild(paper);

// const scissors = document.createElement('button');
// scissors.id =  'Scissors'
// scissors.textContent = 'Scissors';
// scissorsbtn.appendChild(scissors);

// rockbtn.addEventListener('click', function() {
//     let playerSelection = 'Rock'
//     let computerSelection = computerChoice();
//     console.log(playRound(playerSelection, computerSelection));
// });

// paperbtn.addEventListener('click', function() {
//     let playerSelection = 'Paper'
//     let computerSelection = computerChoice();
//     console.log(playRound(playerSelection, computerSelection));
// });

// scissorsbtn.addEventListener('click', function() {
//     let playerSelection = 'Scissors'
//     let computerSelection = computerChoice();
//     console.log(playRound(playerSelection, computerSelection));
// });

// function computerChoice(){
//     let getComputerChoice = ["Rock", "Paper", "Scissors"];
//     let random = Math.floor(Math.random() * 3);
//     return getComputerChoice[random];
// }

// // function playerSelection(PS){

// // }


// // function playerSelection(PS){
// //     let playerAnswer = prompt("Rock, Paper, Scissors!");
// //     playerAnswer = playerAnswer.charAt(0).toUpperCase()+ playerAnswer.slice(1);
// //     return playerAnswer;
// // } 

// function playRound(playerSelection, computerSelection){
//     if (computerSelection === "Rock")
//         if      (playerSelection === "Rock")
//         {
//             alert("It's a tie!");
//         } 
//         else if (playerSelection === "Paper")
//         {
//             alert("You win!");
//         } 
//         else if (playerSelection === "Scissors"){
//             alert("You lose!");
//         }

//     if (computerSelection == "Paper")
//         if      (playerSelection === "Paper")
//         {
//             alert("It's a tie!");
//         } 
//         else if (playerSelection ==="Scissors")
//         {
//             alert("You win!");
//         }
//         else if (playerSelection === "Rock"){
//             alert("You lose!");
//         }

//     if (computerSelection == "Scissors")
//         if      (playerSelection === "Scissors")
//         {
//             alert("It's a tie!");
//         } 
//         else if (playerSelection ==="Rock")
//         {
//             alert("You win!");
//         } 
//         else if (playerSelection === "Paper"){
//             alert("You lose!");
//         }
// }



// console.log(playRound(playerSelection, computerSelection));

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

let playerScore = 0;
let computerScore = 0;
let computerSelection = computerChoice();
let playerSelection = playerChoice();

function playerChoice(){
    //    let pChoice = window.prompt("Let's play Rock, Paper, Scissors! :D");
    //    pChoice = pChoice.charAt(0).toUpperCase() + pChoice.slice(1).toLowerCase();
    //    return pChoice;
    
    }

function computerChoice(){
    let pcChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return pcChoice[randomChoice];
}

function playRound (playerSelection, computerSelection){
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        console.log("It's a draw!");
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || 
             playerSelection === 'Paper' && computerSelection === 'Rock' ||
             playerSelection === 'Scissors' && computerSelection === 'Paper'){
        console.log("You win!");
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || 
             playerSelection === 'Paper' && computerSelection === 'Scissors' ||
             playerSelection === 'Scissors' && computerSelection === 'Rock')
        console.log("You lose!");
}

console.log(playRound(playerSelection, computerSelection));

