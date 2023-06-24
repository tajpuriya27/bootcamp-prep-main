// YOUR CODE BELOW
//solution using forEach
//----test-case not passing----but, consoles expected result
// need suggestion.
/*
function arrayFlattener(orgArr){
    let retArr =[];
    orgArr.forEach(element => {
        if(Array.isArray(element)){
            element.forEach(innerElement =>{
                retArr.push(innerElement);
            })
        }else{
            retArr.push(element);
        }
    });
    return retArr;
}
*/
function arrayFlattener(orgArr){
    let retArr =[];
    for(let i=0;i<orgArr.length;i++){
        if(Array.isArray(orgArr[i])){
            for(let j=0;j<orgArr[i].length;j++){
                retArr.push(orgArr[i][j]);
            }
        }else{
            retArr.push(orgArr[i])
        }
    }
    return retArr;
}

// Checking code
// let arrTosend = ['I', 'am', 'working', ['on', 'another', 'level']];
// console.log(Array.isArray(arrayFlattener(arrTosend)),"result",arrayFlattener(arrTosend))
