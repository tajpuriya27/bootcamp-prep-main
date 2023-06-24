// YOUR CODE BELOW
const removeColumns = function(orgGrid, colNum){
    orgGrid.forEach(function(element){
        let tempNum = colNum;
        while(tempNum){
            element.pop();
            tempNum--;
        }
    })
    return orgGrid;
}

// console.log(removeColumns([[1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3]], 2));