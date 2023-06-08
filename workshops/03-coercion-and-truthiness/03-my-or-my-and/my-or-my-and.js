// YOUR CODE BELOW
function myOr(arg1, arg2, arg3) {
  if (Boolean(arg1) === true) {
    return arg1;
  } else if (Boolean(arg2) === true) {
    return arg2;
  } else {
    return arg3;
  }
}

function myAnd(arg1, arg2, arg3) {
  if (Boolean(arg1) === false) {
    return arg1;
  } else if (Boolean(arg2) === false) {
    return arg2;
  } else {
    return arg3;
  }
}
