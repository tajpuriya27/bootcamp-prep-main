// YOUR CODE BELOW

function lastFridayNight(txn){
    let res =0;
    for(let i=0; i<txn.length; i++){
        res += txn[i].amount;
    }
    return res;
}