// Higher Order Functions

/* A higher order function is a function that does at least one of the following:
** Takes one or more functions as an argument (parameter)
** Returns a function as the result
*/

// Import JSON data
import { posts } from "./posts.js";

// forEach() 
// Executes a provided function once for each array element.
posts.forEach((post) => {
    console.log(post);
});
console.clear();

// filter()
// This method creates a new array filled with elements that pass a test provided by a function.
const filteredPosts = posts.filter(post => {
    return post.userId
})
