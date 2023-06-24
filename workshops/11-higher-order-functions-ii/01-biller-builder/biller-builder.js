// YOUR CODE BELOW
function billerBuilder(state){
    if(state === 'NY'){ return funNy;}
    if(state === 'NJ'){ return funNj;}
}

function funNy(param){
    return param*1.03*1.04;
}

function funNj(param){
    return param*1.05*1.06625;
}11 