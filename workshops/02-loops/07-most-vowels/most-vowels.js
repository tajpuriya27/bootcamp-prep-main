// YOUR CODE BELOW
function mostVowels(givenStr) {
  let highestVowel = 0,
    secondHighest = 0,
    ans = "",
    punctuation = /[\.,?!]/g;
  console.log(givenStr);
  givenStr = givenStr.replace(punctuation, "");
  console.log(givenStr);
  const words = givenStr.split(" ");
  console.log(words);
  let i = 0;
  //console.log(i);
  // console.log(presentWord[0]);
  while (i < words.length) {
    secondHighest = 0;
    let presentWord = words[i].toLowerCase();
    for (let j = 0; j < words[i].length; j++) {
      if (
        presentWord[j] === "a" ||
        presentWord[j] === "e" ||
        presentWord[j] === "i" ||
        presentWord[j] === "o" ||
        presentWord[j] === "u"
      ) {
        secondHighest++;
      }
    }
    if (secondHighest > highestVowel) {
      highestVowel = secondHighest;
      ans = words[i];
    }
    i++;
  }
  return ans;
}

console.log(mostVowels("her hell from us, Peeves."));
