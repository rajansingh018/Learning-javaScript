const accountId = 123456789;
let accountName = "John Doe";
var accountBalance = 1000.50;        // Prefer using let or const for variable declarations in modern JavaScript and avoid using var to prevent issues with variable hoisting and scope.
var accountPassword = "securePassword123";
accountCity = "New York"; // This will create a global variable since it's not declared with var, let, or const
let accountState; // This variable is declared but not initialized, so it will be undefined until assigned a value.

// console.log("Account ID:", accountId);
// console.log("Account Name:", accountName);
// console.log("Account Balance:", accountBalance);
// console.log("Account Password:", accountPassword);
// console.log("Account City:", accountCity);


console.table([accountId, accountName, accountBalance, accountPassword, accountCity, accountState]); // This will display the variables in a table format in the console