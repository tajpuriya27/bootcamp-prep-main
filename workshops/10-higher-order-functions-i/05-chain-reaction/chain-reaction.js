// YOUR CODE BELOW
function chainReaction(startingVal, funArr) {
  for (let i = 0; i < funArr.length; i++) {
    startingVal = funArr[i](startingVal);
  }
  return startingVal;
}
