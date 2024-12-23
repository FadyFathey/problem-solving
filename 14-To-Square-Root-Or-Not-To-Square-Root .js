// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// solution steps:

// 1- check if number has square root or not and if has floating numbers that is mean the number does not have square root

// 2- otherwise otherwise square the number

function squareOrSquareRoot(array) {
  // Check if the array is null or empty
  if (array === null || array.length === 0) {
    return []; // Return an empty array if the input is invalid
  }

  let result = []; // Initialize an empty array to store the results

  // Loop through each element of the input array
  for (let i = 0; i < array.length; i++) {
    // Check if the square root of the number is an integer
    if (Number.isInteger(Math.sqrt(array[i]))) {
      // If the number has an integer square root, push the square root to the result array
      result.push(Math.sqrt(array[i]));
    } else {
      // If the number does not have an integer square root, square the number and push to the result array
      result.push(Math.pow(array[i], 2));
    }
  }

  // Return the result array containing the processed numbers
  return result;
}

// Example test case: The expected output is [2, 9, 3, 49, 4, 1]
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
