// YOUR CODE BELOW
function zeroDarkThirty(argNum) {
  if (argNum === 0) {
    return NaN;
  }
  let argStr = String(argNum);
  argStr = argStr.replaceAll("0", "");
  return Number(argStr);
}

// console.log(zeroDarkThirty(100));
