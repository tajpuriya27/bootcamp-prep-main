// YOUR CODE BELOW
// function zooInventory(orgArr){
//     let retArr = [];
//     for(let i =0; i<orgArr.length; i++){
//         str="";
//         str = orgArr[i][1].join(" is ");
//         str += ".";
//         orgArr[i][1] = str;
//         str =orgArr[i].join(" the ");
//         retArr.push(str);
//     }
//     return retArr;
// }

const zooInventory = (orgArr) =>{
    let retArr =[];
    orgArr.forEach(element => {
        str ="";
        str = element[1].join(" is ");
        str += ".";
        element[1] =str;
        str = element.join(" the ");
        retArr.push(str);
    });
    return retArr;
}

/*
Here forEach loop works but in earlier question, test-case doesnot pass.
Need to recap with prabesh.
*/