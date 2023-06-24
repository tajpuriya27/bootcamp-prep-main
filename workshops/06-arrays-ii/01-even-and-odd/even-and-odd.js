// YOUR CODE BELOW
function evenAndOdd(orgArr) {
  let oddArr = [],
    evenArr = [],
    evenOddArr = [];
  for (let i = 0; i < orgArr.length; i++) {
    if (orgArr[i] % 2 === 0) {
      evenArr.push(orgArr[i]);
    } else {
      oddArr.push(orgArr[i]);
    }
  }
  evenOddArr.push(evenArr);
  evenOddArr.push(oddArr);
  return evenOddArr;
}

// Checking Code
// let newArr = evenAndOdd([7, 14, 21, 28, 35]);
// console.log(newArr);
