// YOUR CODE BELOW
debugger;
function dogBreeder(name = 'Steve', age = 0){
    let retObj ={};
    // console.log(typeof arguments[0])
    if(typeof arguments[0] === "number"){
        retObj.name = 'Steve';
        retObj.age = arguments[0];
    }else{
        retObj.name = name;
        retObj.age = age;
    }
   

    return retObj;
}

// dogBreeder(5);
// console.log(dogBreeder(5));
