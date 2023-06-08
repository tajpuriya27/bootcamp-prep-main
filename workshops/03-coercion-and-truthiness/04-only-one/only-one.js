// // YOUR CODE BELOW
// function onlyOne(arg1, arg2, arg3) {
//   if (
//     (Boolean(arg1) && Boolean(arg2)) ||
//     (Boolean(arg2) && Boolean(arg3)) ||
//     (Boolean(arg1) && Boolean(arg3))
//   ) {
//     return false;
//   } else if (!(Boolean(arg1) && Boolean(arg2) && Boolean(arg3))) {
//     return false;
//   } else {
//     return true;
//   }
// }

function onlyOne(val1, val2, val3) {
  if (val1 && !val2 && !val3) {
    return true;
  } else if (!val1 && !val2 && val3) {
    return true;
  } else if (!val1 && val2 && !val3) {
    return true;
  }
  return false;
}
