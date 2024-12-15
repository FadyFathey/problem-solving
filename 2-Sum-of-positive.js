// Task

// You get an array of numbers, return the sum of all of the positives ones.
// Example

//     [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

// Note

// If there is nothing to sum, the sum is default to 0.

// Solution

const positiveSum = (arr) => {
  //   return arr.filter((arr) => arr > 0).reduce((a, b) => a + b, 0);
  let sum = 0;
  // Ensure the input is an array
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array of numbers.");
  }
  return arr
    .filter((num) => num > 0) // Keep only positive numbers
    .reduce((sum, num) => sum + num, 0); // Sum the positive numbers
};

console.log(positiveSum([1, -4, 7, 12]));
