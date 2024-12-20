// Description:
//  given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

const opposite = (number) => {
  if (number > 0) {
    return -number;
  } else if (number < 0) {
    return Math.abs(number);
  } else return 0;
};

console.log(opposite(30));
