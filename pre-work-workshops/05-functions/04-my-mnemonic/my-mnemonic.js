// YOUR CODE BELOW

function myMnemonic(word1, word2, word3, word4) {
  // Code not working1
  /*
    let mnemonic;
  if (word4 != "undefined") {
    mnemonic = word1[0] + word2[0] + word3[0] + word4[0];
  } else if (word4 === "undefined") {
    mnemonic = word1[0] + word2[0] + word3[0];
  } else if (word3 === "undefined") {
    mnemonic = word1[0] + word2[0];
  }
  return mnemonic.toUpperCase();
*/

  // Code not working2
  /*
  let mnemonic;
  if (typeof word3 != "undefined" && typeof word4 == "undefined") {
    mnemonic = word1[0] + word2[0] + word3[0];
  } else if (typeof word3 === "undefined" && typeof word4 === "undefined") {
    mnemonic = word1[0] + word2[0];
  } else if (word1 === " ") {
    mnemonic = " ";
  } else {
    mnemonic = word1[0] + word2[0] + word3[0] + word4[0];
  }

  return mnemonic.toUpperCase();
  */

  // Code working 1
  /*
  let mneomic = "";
  if (arguments[0] !== undefined) {
    mneomic += arguments[0][0];
  }
  if (arguments[1] !== undefined) {
    mneomic += arguments[1][0];
  }
  if (arguments[2] !== undefined) {
    mneomic += arguments[2][0];
  }
  if (arguments[3] !== undefined) {
    mneomic += arguments[3][0];
  }
  return mneomic.toUpperCase();
  */

  // Using loop - help by lizu
  let mnemonic = "";
  for (i = 0; i < arguments.length; i++) {
    mnemonic += arguments[i][0];
  }
  return mnemonic.toUpperCase();
}

// console.log(myMnemonic("Super", "Tacos", "Apples", "CocaCola"));
// console.log(myMnemonic("Super", "Tacos"));
// console.log(typeof myMnemonic(" "));
