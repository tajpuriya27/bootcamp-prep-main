// YOUR CODE BELOW

function myLastIndexOf(arr, searchVal, startIdx = arr.length - 1) {
  //console.log(startIdx);
  for (startIdx; startIdx > -1; startIdx--) {
    if (arr[startIdx] === searchVal) {
      return startIdx;
    }
  }
  return -1;
}

//console.log(myLastIndexOf([1, 2, 3, 4, 5], 3, 3));
