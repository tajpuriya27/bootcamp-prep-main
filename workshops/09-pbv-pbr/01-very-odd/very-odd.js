// YOUR CODE BELOW
// function veryOdd(orgArr){
//     let retArr = orgArr.filter(element => {
//         if(element % 2 !== 0){
//         return true;
//     }});
//     return retArr;
// }

// shorter version of above code:
function veryOdd(orgArr){
    let retArr = orgArr.filter(element => (element % 2 !== 0));
    return retArr;
}


// console.log(veryOdd([5, 10, 15, 20]));