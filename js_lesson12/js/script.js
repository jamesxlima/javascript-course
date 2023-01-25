// var, let, and const in JavaScript Scope

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

// A 2nd example of global, function, and block scopes.
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc2() {
    var x = 10;
    const z = 5;
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

  {
      var x =11; // var will be applied to function outside the scope (curly brackets). "Function Scoped"
      const z = 6; // const is only applied inside the scope (curly brackets). "Block Scoped"
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }

}

myFunc2();