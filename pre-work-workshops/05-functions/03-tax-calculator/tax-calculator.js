// YOUR CODE BELOW

function taxCalculator(price, percent) {
  if (percent === "NY") {
    return (price = price + price * 0.04);
  } else if (percent === "NJ") {
    return (price = price + price * 0.06625);
  }
}

//testing code
// console.log(taxCalculator(100, "NJ"));
