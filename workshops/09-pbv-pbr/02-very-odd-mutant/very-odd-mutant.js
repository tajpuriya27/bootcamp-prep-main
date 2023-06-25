// YOUR CODE BELOW
function veryOddMutant(orgArr) {
  let count = 0;
  for (i = 0; i < orgArr.length; i++) {
    if (orgArr[i] % 2 === 0) {
      orgArr[i] = "normie";
      count++;
    }
  }
  return count;
}
