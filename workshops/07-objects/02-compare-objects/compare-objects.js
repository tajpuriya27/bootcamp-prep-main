// YOUR CODE BELOW
function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length === Object.keys(obj2).length){
        for(let i=0; i<Object.keys(obj1).length; i++){
            if(Object.keys(obj1)[i] !== Object.keys(obj2)[i]){
                return false;
            }else if(obj1[Object.keys(obj1)[i]] !== obj2[Object.keys(obj2)[i]]){
                return false;
            }
        }
        return true;
    }
    return false;
}