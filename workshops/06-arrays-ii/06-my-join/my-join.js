// YOUR CODE BELOW
function myJoin(orgArr, separator = ","){
    let retStr ="";
    orgArr.forEach((element) => {
        if(element === null || element === undefined){
            element ="";
        }
        if(element === orgArr[orgArr.length-1]){
            retStr += element;
        }else {
            retStr += element + separator; 
        }
        
    });
    return retStr;
}

// console.log(myJoin(['Peter', 'Paul', 'Mary']));
