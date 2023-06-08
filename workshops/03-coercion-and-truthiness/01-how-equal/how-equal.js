// YOUR CODE BELOW
function howEqual(arg1, arg2) {
  if (arg1 === arg2) {
    return "strictly";
  } else if (arg1 == arg2) {
    return "loosely";
  } else {
    return "not equal";
  }
}

//console.log(howEqual(3, 9 / 3));
