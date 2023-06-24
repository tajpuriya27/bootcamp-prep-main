// YOUR CODE BELOW
function callThemAll(orgObj, num){
    let retArr = [];
    Object.values(orgObj).forEach(element =>{
        if(typeof element === 'function'){
            retArr.push(element(num))
        }
    })
    return retArr;
}