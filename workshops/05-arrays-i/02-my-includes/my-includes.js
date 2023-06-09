// YOUR CODE BELOW
function myIncludes(arr, searchVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchVal) {
      return true;
    }
  }
  return false;
}
