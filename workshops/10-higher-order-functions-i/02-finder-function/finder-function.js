// YOUR CODE BELOW
function finderFunction(orgArr, callBackFun) {
  let retVal = -1;
  //   orgArr.forEach((element, index) => {
  //     if (callBackFun(element)) {
  //       retVal = index;
  //     }
  //   });

  for (let i = 0; i < orgArr.length; i++) {
    if (callBackFun(orgArr[i])) {
      return i;
    }
  }
  return retVal;
}

// function isApple(string) {
//   return string === "apple";
// }

// let fruits = ["not an apple", "not an apple", "apple", "not an apple", "apple"];
// debugger;
// console.log(finderFunction(fruits, isApple));

/*
If forEach loop is used, it iterates over all elements. 
'break' doesnot work on callback function.
*/
