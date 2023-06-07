// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  let times = 0;
  if (currentNum > targetNum) {
    return "targetNum must be larger than currentNum";
  }
  for (currentNum; currentNum < targetNum; currentNum *= 2) {
    times++;
    //console.log(times);
  }
  return 20 * times;
}

//console.log(bacteriaTime(3, 12));
