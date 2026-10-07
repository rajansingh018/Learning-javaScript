// // objects
// //singleton object, key-value pairs, unordered collection of properties
// // object using object constructor
// // Object.create

// object literal syntax
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// // accessing properties
// console.log(person.name); // John
// // accessing properties using bracket notation
// console.log(person["age"]); // 30

//greeting function
person.greet = function() {
  return "Hello, " + this.name + "!";  // console.log(`Hello, ${this.name}!`); // this is another way to access the name property of the person object using template literals
};

// console.log(person.greet()); // Hello, John!  // instead of greet we can write greeting, but it is better to use greet as it is more descriptive and easier to understand. greeting is a verb, while greet is a noun. It is better to use nouns for function names as they are more descriptive and easier to understand.

// const mysymbol = Symbol("mysymbol");
// const myObject = {
//   [mysymbol]: "value",
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// console.log(myObject[mysymbol]); // value
// console.log(myObject.name); // John
// console.log(myObject.age); // 30
// console.log(myObject.city); // New York

//to change the value of a property in an object, we can use the assignment operator (=) to assign a new value to the property. For example, to change the value of the "name" property in the "person" object, we can do the following:
// myObject.name = "Jane";
// console.log(myObject.name); // Jane

// // to freeze an object, we can use the Object.freeze() method. This will prevent any changes to the object's properties, including adding new properties or deleting existing ones. For example:
// Object.freeze(myObject);
// myObject.age = 35; // This will not change the value of the "age" property
// console.log(myObject.age); // 30
// console.log(myObject)