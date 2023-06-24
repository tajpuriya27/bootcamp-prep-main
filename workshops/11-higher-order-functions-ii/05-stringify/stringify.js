// YOUR CODE BELOW
function stringify(callbackFun){
    return function(){
        let ans = callbackFun();
        ans = String(ans);
        return ans;
    }
}

function callbackFun(){
    return 100;
}