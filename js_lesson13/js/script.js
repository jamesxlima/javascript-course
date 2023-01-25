// Arrays

const myArray = [];

// Add elements to an array by referencing the position they are in, in the Array.

myArray[0] = "James";
myArray[1] = 818;
myArray[2] = false;

// Arrays are like storage locations for values.
console.log(myArray);

// Length Property
console.log(myArray.length);

// Last element in an Array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

// Use the push() method to add elements to end of an array.
myArray.push("music");
console.log(myArray);

// Use pop() to remove elements from the end of an array.
myArray.pop();

// unshift() adds an element to the front of an array.
myArray.unshift(); 

// shift() removes an element from the front of an array.
myArray.shift();

// splice() removes or replaces existing elements and/or adds new elements in place.
myArray.splice(1,0,75);

// slice() slices out a piece of an array.
myArray.slice(3);

// reverse() reverses the elements in an array.
myArray.reverse();

// The join() method returns an array as a string.
myArray.join();

// split() method splits a string into an array of substrings.
myArray.split(",")

// concat() method concatenates (joins) two or more arrays.
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const myArrayC = myArrayA.concat(myArrayB);
console.log(myArrayC);

// The Spread (...) Operator expands an iterable into more elements (or more arguments for function calls).
const newArray = [...myArrayA, ...myArrayB];