// YOUR CODE BELOW
// function onlyOdds() {

// }

const onlyOdds = (num) => {
  let result = 0;
  for (num; num > 0; num--) {
    if (num % 2 != 0) {
      result += num;
    }
  }
  return result;
};
