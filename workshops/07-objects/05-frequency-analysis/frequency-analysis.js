// YOUR CODE BELOW
//solution 1
// function frequencyAnalysis(str){
//     let resObj = {};
//     str = str.toLowerCase();
//     while(str.length){
//         let counter = 1;
//         for(let i =1; i<str.length; i++){
//             if(str[0] === str[i]){counter++}
//         }
//         resObj[str[0]] = counter;
//         str = str.replaceAll(str[0],"");
//     }
//     return resObj;
// }

//Solution 2
function frequencyAnalysis(str){
    let resObj ={};
    str = str.toLowerCase();
    for(let i =0; i<str.length; i++){
        if(str[i] in resObj){
            resObj[str[i]] += 1;
        }else{
            resObj[str[i]] = 1;
        }
    }
    return resObj;
}


/*
Solution 2 is more optimize then one. It uses single loop.


*/