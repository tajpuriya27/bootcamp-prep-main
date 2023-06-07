// YOUR CODE BELOW
/*
function myIndexOf(sourceStr, searchValue, startIdx = 0){
    let j = 0;
    for(let i =0; i<searchValue.length; i++){
        for(let j=0; j<sourceStr.length; j++){
            if(searchValue[i]=== sourceStr[j]){

            }
        }
    }
}
*/

function myIndexOf(sourceStr, searchVal, startIdx = 0) {
  const searchLength = searchVal.length;
  for (let i = startIdx; i < sourceStr.length; i++) {
    if (searchVal[0] === sourceStr[i]) {
      let x = sourceStr.slice(i, i + searchLength);
      if (x === searchVal) {
        return i;
      }
    }
  }
  return -1;
}

/*
function myIndexOf(source, searchVal, startIdx) {
  if (startIdx === undefined) {
    startIdx = 0;
  }
  const search_length = searchVal.length;
  for (let i = startIdx; i <= source.length; i++) {
    if (source[i] === searchVal[0]) {
      console.log(i);
      console.log(search_length);
      console.log(source.slice(i, i + search_length));
      let x = source.slice(i, i + search_length);
      if (x === searchVal) {
        console.log(i, "apple");
        return i;
      }
      return -1;
    }
  }
}
*/

myIndexOf("here and there", "nowhere");
