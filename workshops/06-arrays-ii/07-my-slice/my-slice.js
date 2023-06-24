// YOUR CODE BELOW
function mySlice(orgArr,startIdx = 0, endIdx = orgArr.length){
    let retArr =[];
    if(startIdx<0){
        startIdx += orgArr.length;
    }
    if(endIdx<0){
        endIdx += orgArr.length;
    }
    for(let i=startIdx; i<endIdx; i++){
        retArr.push(orgArr[i]);
    }
    return retArr;
}