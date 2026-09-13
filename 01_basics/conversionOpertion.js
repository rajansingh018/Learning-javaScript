let score = "100";
console.log(typeof score); // string

let numericScore = Number(score);
console.log(typeof numericScore); // number
console.log(numericScore); // 100

let invalidScore = "abc";
let convertedInvalidScore = Number(invalidScore);
console.log(typeof convertedInvalidScore); // number
console.log(convertedInvalidScore); // NaN (Not a Number)

//to convert a number to a string
let num = 123;
let strNum = String(num);
console.log(typeof strNum); // string
console.log(strNum); // "123"

//************  Operations ****************

// console.log("Addition:", 5 + 3); // 8
// console.log("Subtraction:", 5 - 3); // 2
// console.log("Multiplication:", 5 * 3); // 15
// console.log("Division:", 5 / 3); // 1.6666666666666667
// console.log("Modulus:", 5 % 3); // 2
// console.log("Exponentiation:", 5 ** 3); // 125

// preferred type
console.log("Preferred Type:", 5 + "3"); // "53" (string concatenation)
// not preferred type
console.log("Not Preferred Type:", 5 - "3"); // 2 (numeric subtraction)
console.log( 1 + 2 + "3"); // "33" (numeric addition followed by string concatenation)
console.log( "3" + 1 + 2); // "312" (string concatenation followed by numeric addition)
// do not use the + operator for numeric addition with strings, as it can lead to unexpected results. Always convert strings to numbers before performing arithmetic operations.