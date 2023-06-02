let word = "carrots";
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';

let lastWord;

// YOUR CODE BELOW
if (
  word.length === 7 &&
  (word[0].toLowerCase() === "p" || word[0].toLowerCase() === "h")
) {
  lastWord = word.toUpperCase();
} else {
  lastWord = word;
}
