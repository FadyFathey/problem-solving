// "Write a code to calculate the power of a number (base raised to an exponent) using a for loop."

function getPower(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(getPower(5, 5));
console.log(getPower(2, 3));
