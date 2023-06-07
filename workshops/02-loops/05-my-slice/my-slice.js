// YOUR CODE BELOW
function mySlice(originalStr, startIdx = 0, endIdx = originalStr.length) {
  //return originalStr.slice[startIdx:endIdx];
  let resultedStr = "";
  while (startIdx < endIdx) {
    resultedStr += originalStr[startIdx];
    startIdx++;
  }
  return resultedStr;
}
