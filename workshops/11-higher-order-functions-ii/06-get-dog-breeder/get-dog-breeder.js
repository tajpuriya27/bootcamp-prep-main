// YOUR CODE BELOW
function getDogBreeder(name1, age1){
    let ans ={};
    return function(name=name1, age=age1){
        if(typeof(name) === "number"){
            age = name;
            name =name1;
        }
        ans.name = name;
        ans.age = age;
        return ans;
    }
}

// let dogBreeder = getDogBreeder('Rufus', 5);
// let returnedValue = dogBreeder();
// console.log(returnedValue);