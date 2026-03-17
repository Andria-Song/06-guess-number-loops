document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Get the message box so we can show game results on the page
  const messageBox = document.getElementById('message');

  // Track whether the player guessed correctly
  let guessedCorrectly = false;

  // Give the player exactly 5 attempts using a for loop
  for (let attempts = 1; attempts <= 5; attempts = attempts + 1) {
    // Ask the player for a guess
    const userInput = prompt('Enter your guess (1-10):');

    // Convert text input to a number
    const guess = Number(userInput);

    // Check if the player entered a number in range
    if (guess < 1 || guess > 10) {
      alert('Please enter a valid number between 1 and 10.');
      continue;
    }

    // Check if the guess is correct
    if (guess === secretNumber) {
      messageBox.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      guessedCorrectly = true;
      break;
    } else if (guess < secretNumber) {
      alert('Too low! Try a higher number.');
    } else {
      alert('Too high! Try a lower number.');
    }
  }

  // If all attempts are used and no correct guess, show game-over message
  if (guessedCorrectly === false) {
    messageBox.textContent = `❌ Game over! The number was ${secretNumber}.`;
  }

});