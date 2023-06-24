// YOUR CODE BELOW
debugger;
function partial(concatsStrings, argA){
    return function(argB){
       return concatsStrings(argA, argB);
    } 
}

let concatsStrings = function(argA, argB){
    return argA + argB;
}

// let returnedFunction = partial(concatsStrings, 'hello');
// let returnedValue = returnedFunction(' world!');
// console.log(returnedValue);