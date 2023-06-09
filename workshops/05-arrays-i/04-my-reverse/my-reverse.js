// YOUR CODE BELOW
function myReverse(orgArr) {
  let revArr = [];
  for (let i = orgArr.length - 1; i > -1; i--) {
    revArr.push(orgArr[i]);
  }
  return revArr;
}

//console.log(myReverse(["first", "second", "third"]));
