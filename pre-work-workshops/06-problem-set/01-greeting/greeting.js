// YOUR CODE BELOW

//Solution1
/*
function greeting(usrName) {
  if (usrName === String) {
    return "Hello " + usrName + "!";
  } else {
    return "Hello!";
  }
}
*/

//Solution2, better one
function greeting(usrName = "Hello!") {
  if (arguments[0] === undefined) {
    return usrName;
  }
  return "Hello " + usrName + "!";
}

// trying same solution with arrow function - not found solution yet.
/*
const greeting = (usrName) => {
  console.log(usrName);
  console.log(arguments[0]);
};
*/
greeting("first");
//console.log(greeting("there"));
