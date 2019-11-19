let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  random = Math.floor(Math.random() * 10)
  console.log(random)
  return random
}

generateTarget()

function compareGuesses(human, computer, random) {
  if (Math.abs(human - random) < Math.abs(computer - random)) {
    return winner = 'human'
  } else if (Math.abs(human - random) > Math.abs(computer - random)) {
    //alert("Your number is further away from the generated number.")
    return winner = 'computer'
  } else if (Math.abs(human - random) === Math.abs(computer - random)) {
    return winner = 'human'
  }
}

console.log("The winner is: "+ compareGuesses(8, 1, random))

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++
    return humanScore
  } else if (winner === 'computer') {
    computerScore++
    return computerScore
  }
}

updateScore(winner)
console.log("The human score is: "+ humanScore)
console.log("The computer score is: "+ computerScore)

function advanceRound() {
  return currentRoundNumber++
}

advanceRound()
console.log("The current round is :"+ advanceRound())