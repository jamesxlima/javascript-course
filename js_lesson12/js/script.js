// Functions

// Methods = Built-in Functions!
// Example
"James".toLowerCase();

// Function Declaration Syntax:
function sum() {
  return 2 + 2;
}

console.log(sum());

// Passing Parameters to a function 
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(3,4));

// Example Function
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));

// Arrow Function
const getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("james@SomeRandomEmail.com"));

// Creating A Function: toProperCase()
// First letter of the string will be capitalized. 
const toProperCase = (myName) => {
  return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
};
console.log(toProperCase("jAmES"));

// Functions provide re-usable code!