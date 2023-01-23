// String Methods & Properties

// The String object ("") is used to represent and manipulate a sequence of characters.
const myVariable = "Mathematics";
console.log(myVariable);
// Expected Output: Mathematics

// The length property returns the number of code units in the string.
console.log(myVariable.length);
// Expected Output: 11

// The charAt() method returns a character from a string.
console.log(myVariable.charAt(0));
// Expected Output: M

// The indexOf() method returns the position of the first occurrence of specified character(s) in a string.
console.log(myVariable.indexOf("mat"));
// Expected Output: 5

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
console.log(myVariable.lastIndexOf("ema"));
// Expected Output: 4

// The slice() method extracts a part of a string.
console.log(myVariable.slice(5));
// Expected Output: matics

// The toUpperCase() method converts a string to uppercase letters.
console.log(myVariable.toUpperCase());
// Expected Output: MATHEMATICS

// TThe toLowerCase() method converts a string to lowercase letters.
console.log(myVariable.toLowerCase());
// Expected Output: mathematics

// The includes() method returns true if a string includes a specified string.
console.log(myVariable.includes("mat"));
// Expected Output: true

// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
console.log(myVariable.split("e"));
// Expected Output: 0: "Math" 1: "matics"
// It was divided in half at "e" where it was targeted.