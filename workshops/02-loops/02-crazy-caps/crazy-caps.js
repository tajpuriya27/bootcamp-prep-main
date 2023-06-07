// YOUR CODE BELOW

const crazyCaps = (givenStr) => {
  let resultStr = "";
  for (let i = 0; i < givenStr.length; i++) {
    if (i % 2 === 0) {
      resultStr += givenStr[i].toLowerCase();
    } else {
      resultStr += givenStr[i].toUpperCase();
    }
  }
  return resultStr;
};
