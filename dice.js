function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Get the user's guess from the input
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Display the result
    const resultElement = document.getElementById('result');
    if (userGuess === randomNumber) {
        resultElement.textContent = `Congratulations!. The number was ${randomNumber}.`;
    } else {
        resultElement.textContent = `you guessed wrong. correct number was ${randomNumber}.`;
    }
}

