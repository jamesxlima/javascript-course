// Conditionals : Ternary Operator

// A Ternary Operator is shorthand for an "if else" statement

// Syntax

// condition ? ifTrue : ifFalse;
// ? = if
// : = else

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response)

let isCustomerBanned = true;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" 
: soup 
? `Yes, we have ${soup} today.` 
: "Sorry, no soup today.";
console.log(soupAccess);

// For long ternary operators each part should be put on a new line for clean formatting

// Grading Scale Example
let testScore = 79;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}.`)

// Rock, Paper, Scissors Example
let playerOne = "paper";
let computer = "scissors";
let result = playerOne === computer ? "Tie Game!"
: playerOne === "rock" && computer === "paper" ? "Computer Wins!"
: playerOne === "paper" && computer === "scissors" ? "Computer Wins!"
: playerOne === "scissors" && computer === "rock" ? "Computer Wins!"
: "playerOne Wins!";
console.log(result);
