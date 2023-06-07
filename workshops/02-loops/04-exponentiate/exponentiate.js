// YOUR CODE BELOW
function exponentiate(base, power) {
  let result = 1;
  if (power == 0) {
    return result;
  } else {
    while (power != 0) {
      result *= base;
      power--;
    }
  }
  return result;
}

console.log(exponentiate(2, 5));
