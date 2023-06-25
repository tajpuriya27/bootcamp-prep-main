// YOUR CODE BELOW
function myForEach(orgArr, callBackFun) {
  for (let i = 0; i < orgArr.length; i++) {
    callBackFun(orgArr[i], i);
  }
}
