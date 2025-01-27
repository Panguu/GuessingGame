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
