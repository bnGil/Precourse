let wordList = ["Banana", "Apple", "Grapes", "Watermelon", "Orange"];
let word = wordList[Math.floor(Math.random() * wordList.length)];
let tries = 10;
let guessedLetters = [];
let displayedWord = "";
for (let letter of word) {
  displayedWord += "*";
}

// updateWord gets the letters that are guessed so far. returns the updated word.
function updateWord(lettersList) {
  lettersList = lettersList.map((letter) => letter.toLowerCase());
  let updatedWord = "";
  for (let item of word) {
    if (lettersList.includes(item.toLowerCase())) {
      updatedWord += item;
    } else {
      updatedWord += "*";
    }
  }

  if (updatedWord === word) {
    return 0;
  }
  return updatedWord;
}

// Main loop of the game.
while (tries > 0) {
  console.log(`You have ${tries} guesses
The word is:
${displayedWord}`);
  guess = window.prompt("What is your guess?");
  if (guess.length === 1 && guess.toLowerCase() != guess.toUpperCase()) {
    // Check that the user's input is one letter
    guessedLetters.push(guess);
    tries--;
    displayedWord = updateWord(guessedLetters);
    if (displayedWord === 0) {
      console.log("Wow you are good!!");
      break;
    }
    if (tries === 0 && displayedWord != 0) {
      console.log("No more guesses. Game over");
    }
  } else {
    console.log("Please enter only one character");
  }
}
