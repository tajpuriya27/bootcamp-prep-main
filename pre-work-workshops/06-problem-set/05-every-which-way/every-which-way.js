// YOUR CODE BELOW
function everyWhichWay(n1, n2, n3) {
  if (n1 + n2 === n3) {
    return "sum";
  } else if (n1 - n2 === n3) {
    return "difference";
  } else if (n1 * n2 === n3) {
    return "product";
  } else if (n1 / n2 === n3) {
    return "fraction";
  } else {
    return null;
  }
}
