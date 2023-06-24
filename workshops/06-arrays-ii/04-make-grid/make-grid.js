// YOUR CODE BELOW.
//debugger;
const makeGrid = function(col, row){
    let retArr = [];
    while(row){
        rowArr =[];
        for(let i=1; i<=col; i++){
            rowArr.push(i);
        }
        retArr.push(rowArr);
        row--;
    }
    return retArr;
}




makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
4x3matrix*/