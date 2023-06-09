// YOUR CODE BELOW
function oddCouple(orgArr) {
  let resArr = [];
  for (let i = 0; i < orgArr.length; i++) {
    if (orgArr[i] % 2 === 1) {
      resArr.push(orgArr[i]);
    }
    if (resArr.length === 2) {
      break;
    }
  }
  return resArr;
}

let myArr = [1, 2, 3, 4, 5];

//console.log(oddCouple(myArr));
