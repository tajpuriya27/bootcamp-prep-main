// YOUR CODE BELOW
//Given code
/*
function getMax(f, s, a) {if (f > s) {if (f > a) {return f;} return a;} else if (s > a) {return s;}else {return a;}}
*/

// Edited code
function getMax(f, s, a) {
  if (f > s) {
    if (f > a) {
      return f;
    }
    return a;
  } else if (s > a) {
    return s;
  } else {
    return a;
  }
}
