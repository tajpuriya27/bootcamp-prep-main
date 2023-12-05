// function generateFibonacci(n) {
//   if (n === 1) return [0, 1];
//   else {
//     var s = generateFibonacci(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// }

function generateFibonacci(n) {
  var fib = [];
  if (n === 1) fib.push(0);
  else if (n === 2) fib.push(0, 1);
  else {
    fib.push(0, 1);
    for (var i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
}

console.log(generateFibonacci(4));
