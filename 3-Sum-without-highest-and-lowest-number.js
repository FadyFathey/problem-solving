// Description:
// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// ************************************************************/***************************************/***************************

// solution

const sumArray = (arr) => {
  // validation: check if arr is null, undefined, or has less than 3 elements
  if (!Array.isArray(arr) || arr.length < 3) {
    return 0;
  }

  return arr
    .sort((a, b) => a - b) // Sort the array in ascending order
    .slice(1, -1) // Remove the first and last elements
    .reduce((a, b) => a + b, 0); // Sum the remaining elements
};

console.log(sumArray([6, 2, 1, 8, 10, 2])); // Output: 16
