// YOUR CODE BELOW
// Given code:
/*
function justInCamelCase(undername) {
  let camelcaseoutput = "";
    let foundunder = false;
    for(let i = 0; i<undername.length; i++) {
    if (undername[i] === "_") {
      foundunder = true;
      } else {
        if (foundunder) {
        camelcaseoutput += undername[i].toUpperCase();
      foundunder = false;
    } else {
      camelcaseoutput += undername[i];
      }
  }
  }
      return camelcaseoutput;
}
*/

function justInCamelCase(underName) {
  let camelCaseOutput = "";
  let foundUnder = false;
  for (let i = 0; i < underName.length; i++) {
    if (underName[i] === "_") {
      foundUnder = true;
    } else {
      if (foundUnder) {
        camelCaseOutput += underName[i].toUpperCase();
        foundUnder = false;
      } else {
        camelCaseOutput += underName[i];
      }
    }
  }
  return camelCaseOutput;
}

/*
camelCase
snake_case
kebab-case
PascalCase
*/
