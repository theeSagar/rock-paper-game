let userScore = 0;
let computerScore = 0;
const compChoice = ["rock", "paper", "sesor"];
const msg = document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const computer_scoreVar=document.querySelector("#computer-score");
const resetBtn=document.querySelector("#reset")

// Selecting the choice
const choices = document.querySelectorAll(".choice");

// Extraction of individual divs
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Accessing values from choices -> id
    // console.log(`Choice was clicked! ${userChoice}`);
    playGame(userChoice);
  });
});

//--Generating choice from computer--

function generateComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  return compChoice[randNum];
}
const playGame = (userChoice) => {
  generateComputerChoice();
  // console.log(`user choice ${userChoice}`)
  const computerChoice = generateComputerChoice();
  // console.log(`Computer choice ${computerChoice}`)

  //--checking who will win--
  winnercheck(computerChoice, userChoice);
};
const winnercheck = (computerChoice, userChoice) => {
  if (
    (userChoice == "rock" && computerChoice == "sesor") ||
    (userChoice == "sesor" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "rock")
  ) {
    console.log(`
        Your Choice= ${userChoice} 
        Computer Choice = ${computerChoice}
        You wone !! `);
    msg.innerText = `You win👍${userChoice} beats ${computerChoice}`;
    msg.style.background = "green";
    userScore++ // score increased
    user_score.innerHTML=userScore;
    
  } else if (userChoice == computerChoice) {
    console.log(`
        Your Choice = ${userChoice} 
        Computer Choice = ${computerChoice}
        Match Draw !! `);
    msg.innerText = `Match Draw🤘`;
    msg.style.background = "darkblue";
  } else {
    console.log(`
        You choice =  ${userChoice} 
        Computer Choice =  ${computerChoice}
        You Lost`);
    msg.innerHTML = `You Lose👎 ${computerChoice} beats ${userChoice}`;
    msg.style.background = "red";
    computerScore++;
    computer_scoreVar.innerText=computerScore
  }
};
// Reseting game

resetBtn.addEventListener("click",()=>{
    location.reload()
})
