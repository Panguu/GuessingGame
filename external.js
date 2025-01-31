function generateRandomNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

function getPlayerGuess() {
  let guess;
  while (true) {
    guess = prompt(
      "Welcome Player \u{1F60E}! Please enter an integer between 1 and 100:"
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
        "Wrong input \u{1F635}! Please enter a integer between 1 and 100. No '.' or ',' will be accepted"
      );
    }
  }
};

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess > correctNumber) {
    return "Too high! \u{1F61B}";
  }
  if (playerGuess < correctNumber) {
    return "Too low! \u{1F61F}";
  }
  return "Correct! \u{1F389}";
};


function calculateScore(counter) {
  let score = 100 - counter * 10;
  if (score < 0) score = 0;
  return score;
}

function game() {
  const rand = generateRandomNumber(); 
  let counter = 0; 

  for (; counter < 10; counter++) {
    const guess = getPlayerGuess(); 
    const check = checkGuess(guess, rand); 
    
    if (check.includes("Correct!")) {
      alert("You win! \u{1F389} Your score is " + calculateScore(counter));
      return;
    } 
    alert(check);
  }
  alert("You lost. \u{1F635} The correct number was " + rand);

}


game();