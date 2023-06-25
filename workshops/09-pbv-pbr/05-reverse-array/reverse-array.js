// YOUR CODE BELOW
function reverseArray(orgArr) {
  let newArr = [];
  while (orgArr.length) {
    newArr.push(orgArr.pop());
  }
  while (newArr.length) {
    orgArr.push(newArr.shift());
  }
  return orgArr;
}
