// var, let, and const

// Use "const" whenever you can
// Use "let" when you know you're going to re-assign a value
// "var" is the least used. Used mainly for legacy code.

// Global Scope = Define a variable, give it a value and it is avaliable everywhere.
var x = 1;
let y = 2;
const z = 3;

// Local Scope
{
  let y = 4;
}

// Function Scope
function myFunc() {
  const z = 5;
}
myFunc();

// If statements, for loops, and switch statements have block scopes.
