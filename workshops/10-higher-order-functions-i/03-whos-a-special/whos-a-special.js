// YOUR CODE BELOW
function whosASpecial(arrWithObj) {
  let finalStr = "";
  arrWithObj.forEach((element) => {
    finalStr += `${element.name} the ${element.species} is very special! `;
  });
  return finalStr.trim();
}
