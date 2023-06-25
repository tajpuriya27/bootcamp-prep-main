// YOUR CODE BELOW
function deeperCopy(orgArr) {
  let copyArr = [];
  for (let i = 0; i < orgArr.length; i++) {
    if (Array.isArray(orgArr[i])) {
      let tempArr = [];
      for (let j = 0; j < orgArr[i].length; j++) {
        tempArr.push(orgArr[i][j]);
      }
      copyArr.push(tempArr);
    } else {
      copyArr.push(orgArr[i]);
    }
  }
  return copyArr;
}

// let fruits = ["apples", ["bananas", "citrus"]];

// let returnedValue = deeperCopy(fruits);
// returnedValue[1].push("dragon fruit");
// console.log(fruits);
