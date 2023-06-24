// debugger;
// function greetMe() {
//  console.log('Hi!');
// }
// function getGreeter() {
//  return greetMe; // note: we're returning the function without calling it
// }
// let greeter = getGreeter();
// console.log(typeof greeter);
// console.log(greeter);
// greeter();



// debugger;
// function greetMe() {
//  console.log('Hi!');
// }
// function getGreeter() {
//  return greetMe(); // what if we did invoke it?
// }
// let greeter = getGreeter();
// console.log(typeof greeter);
// console.log(greeter);
// greeter();


// debugger;
// function getGreeter() {
//     // we can declare a new inner function and then return it
//     function greetMe() {
//     console.log('Hi!');
//     }
//     return greetMe;
//    }
//    let greeter = getGreeter();
//    greeter()


// debugger;
// function getGreeter() {
//     // we can return anonymous function, too
//     return function() {
//     console.log('Hi!');
//     };
//    }
//    let greeter = getGreeter();
//    greeter()


/****************************************/
let str = "to make first letter capital";
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str)