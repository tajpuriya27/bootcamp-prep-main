// YOUR CODE BELOW
function cacheSavings(callback){
    let value = 0;
    let cache;
    return function funcy(argument){
      if (argument === value){
        return cache
      }
      else{
      value = argument
      cache = callback(argument)
      return cache}
    }
  }