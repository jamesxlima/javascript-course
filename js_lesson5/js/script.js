// First Code Challenge


// Write code that will return a random letter from your name

// Character Selector in the string
console.log("James".charAt());

// Random Number Generator from 1-5 (5 characters in the name "James")
console.log(Math.floor(Math.random() * 5 + 1));

// Now combine both small functions into one solution

// String characters positions start at 0. Since your name has 5 characters the range must be 0-4.

// Generate a random number form 0-4.
console.log("James".charAt(Math.floor(Math.random() * 5)));



// Now create a sloution that works for ALL names.
const anyName = "Cornelius";

// The name is a variable. "anyName.length" takes into account how long each variable is.
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));