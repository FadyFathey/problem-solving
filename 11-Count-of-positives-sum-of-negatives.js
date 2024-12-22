// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// solution
// first collect positive numbers and store it into let &&  remove negatives

function countPositivesSumNegatives(input) {
  // Validate input
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }

  // Initialize counters
  let countPositives = 0;
  let sumNegatives = 0;

  // Iterate through the array
  for (const number of input) {
    if (number > 0) {
      countPositives++; // Count positive numbers
    } else if (number < 0) {
      sumNegatives += number; // Sum negative numbers
    }
  }

  // Return results as an array
  return [countPositives, sumNegatives];
}

// Example usage
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
