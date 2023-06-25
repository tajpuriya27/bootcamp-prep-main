// YOUR CODE BELOW
function mySplice(orgArr, startIdx, numOfElement, replacedVal) {
  let newArr = [];
  let delArr = [];
  for (i = 0; i < startIdx; i++) {
    newArr.push(orgArr[i]);
  }
  if (replacedVal !== undefined) {
    newArr.push(replacedVal);
  }
  for (j = startIdx + numOfElement; j < orgArr.length; j++) {
    newArr.push(orgArr[j]);
  }
  // console.log(newArr);
  // ? Why I can't mutate the original array like this?
  //   orgArr = newArr;
  //   console.log(orgArr);

  for (i = startIdx; i < startIdx + numOfElement; i++) {
    delArr.push(orgArr[i]);
  }
  // console.log(delArr);

  while (orgArr.length) {
    orgArr.pop();
  }

  //   orgArr = [];
  //   console.log(orgArr);

  for (i = 0; i < newArr.length; i++) {
    orgArr.push(newArr[i]);
  }
  return delArr;
}
