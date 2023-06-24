// YOUR CODE BELOW
function timesTable(num1){
    return function (num2){
        return num1*num2;
    }
}

let returnedValue = timesTable(7);
let product = returnedValue(8);
console.log(product);