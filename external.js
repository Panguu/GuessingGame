function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

const getPlayerGuess = function () {
  let guess;
  while (true) {
    guess = prompt(
      "Welcome Player 😎! Please enter an integer between 1 and 100:"
    );
    const numberGuess = Number(guess);

    if (
      !Number.isNaN(numberGuess) &&
      Number.isInteger(numberGuess) &&
      numberGuess >= 1 &&
      numberGuess <= 100
    ) {
      return numberGuess;
    } else {
      alert(
        "Wrong input 😵! Please enter a integer between 1 and 100. No '.' or ',' will be accepted"
      );
    }
  }
};

const checkGuess = function (playerGuess, correctNumber) {
  if (playerGuess > correctNumber) {
    return "Too high!😝";
  }
  if (playerGuess < correctNumber) {
    return "Too low! 😜";
  }
  return "Correct! 🎉";
};


function calculateScore(counter) {
  let score = 100 - counter * 10;
  if (score < 0) score = 0;
  return score;
}

function guessingGame() {
  const rand = generateRandomNumber(); 
  let counter = 0; 
  let result = false; 

  for (counter; counter < 10; counter++) {
    const guess = getPlayerGuess(); 
    const check = checkGuess(guess, rand); 
    
    if (check === "Correct! 🎉") {
      result = true; 
      break; 
    } else if (check === "Too low! 😜") {
      alert("Too low! 😜");
    } else {
      alert("Too high! 😜");
    }
  }

  const score = calculateScore(counter);  
  if (result) {
    alert("You win! 🎉 Your score is " + score);
  } else {
    alert("You lost. The correct number was " + rand);
  }
}


guessingGame() ; 