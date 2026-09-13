"use strict"; // treats all JS code as newer version

// alert("Hello World!"); // shows a pop-up message only in browsers not in node.js
// alert(9+9); // shows a pop-up message with o/p 9 only in browsers not in node.js gives an error in node.js

// number data type
let num1 = 9; // integer
let num2 = 9.5; // float
console.log(num1 + num2); // 18.5

// string data type
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Hello World

// boolean data type
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // false

// undefined data type
let undefinedVar;
console.log(undefinedVar); // undefined

// null data type
let nullVar = null;
console.log(nullVar); // null

// object data type
let obj = { name: "John", age: 30 };
console.log(obj.name); // John

// array data type
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1

// symbol data type
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1 === sym2); // false

// BigInt data type
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log(bigIntNum); // 1234567890123456789012345678901234567890n

// typeof operator
console.log(typeof num1); // number
console.log(typeof str1); // string
console.log(typeof isTrue); // boolean
console.log(typeof undefinedVar); // undefined
console.log(typeof nullVar); // object (this is a known quirk in JavaScript)
console.log(typeof obj); // object