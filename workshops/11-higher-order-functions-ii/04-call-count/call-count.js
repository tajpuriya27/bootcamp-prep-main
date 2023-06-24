// YOUR CODE BELOW
debugger;
function callCount(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
        return counter;
    }
}

//let newFunction1 = callCount();
//let newFunction2 = callCount();

// newFunction1(); // => 1
// newFunction1(); // => 2

// newFunction2(); // => 1
// newFunction2(); // => 2

let returnedFunction = callCount();

    returnedFunction();
    returnedFunction();
    let finalCount = returnedFunction();
console.log(finalCount);