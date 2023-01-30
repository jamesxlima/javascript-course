// Errors & Error Handling
"use strict"; // Defines that JavaScript code should be executed in "strict mode"
// With strict mode, you can not, for example, use undeclared variables.
const variable = "James"; // Must declare "variable" with const.
console.log(variable);

// "ReferenceError" represents when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

// "SyntaxError" represents an error when trying to interpret syntactically invalid code. The code does not conform to the syntax of the language when parsing code.

// "TypeError" represents an error typically (but not exclusively) when a value is not of the expected type.

// Try and catch block for errors.

// The "try" statement defines a code block to run (to try).

// The "catch" statement defines a code block to handle any error.

// The console.error() method writes an error message to the console.

// The console.warn() method writes a warning to the console.

// The console.table() method writes a table to the console.

// The "throw" statement allows you to create a custom error.

// The "finally" statement lets you execute code, after try and catch, regardless of the result.

/*
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
 */