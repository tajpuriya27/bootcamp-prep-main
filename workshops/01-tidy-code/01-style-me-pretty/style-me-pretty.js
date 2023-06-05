// YOUR CODE BELOW
// Previous written code
/*
function styleMePretty() {
  let truth = "";
  function innerBeauty(count) {
    let result = "";
    while (count > 0) {
      count--;
      if (count === 2) {
        result += "Unformatted code";
      }
    }
    result += " is difficult to parse";
    return result;
  }truth += innerBeauty(5); truth += " for humans if not for machines";
  return truth;
}
*/

// Made Changes below
function styleMePretty() {
  let truth = "";
  function innerBeauty(count) {
    let result = "";
    while (count > 0) {
      count--;
      if (count === 2) {
        result += "Unformatted code";
      }
    }
    result += " is difficult to parse";
    return result;
  }
  truth += innerBeauty(5);
  truth += " for humans if not for machines";
  return truth;
}

//Simple solution.
/*
function styleMePretty() {
  return "Unformatted code is difficult to parse for humans if not for machines";
}
*/

/* 
Just have to save files while preetier extension is on.
It makes all code preety, all at once.
*/
