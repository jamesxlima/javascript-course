// Conditionals: Switch Statements

// Comment out sections to see examples

// Syntax
// switch (expression OR value) {

//     case choice1: 
//     // run this code
//     break;

//     case choice2:
//     // run this different code
//     break;      
    
//     //add as many cases as needed

//     default:
//     // run this code if no case matches
//     // no need for a break here
// }


// Example #1
switch (2) {

    case 1: 
    console.log(1);
    break;

    case 2:
    console.log(2);
    break;      
    
    case 3:
    console.log(3);
    break;      
    
    default:
    console.log("No Match");
}

// Example #2: Evaluate Numbers
switch (Math.floor(Math.random() * 5 + 1)) {

    case 1: 
    console.log(1);
    break;

    case 2:
    console.log(2);
    break;      
    
    case 3:
    console.log(3);
    break;      
    
    default:
    console.log("No Match");
}

// Rock, Paper, Scissors Decisions Tree
let playerOne = "scissors";
let computer = "paper";

switch (playerOne) {
    case computer:
      console.log("Tie Game!");
      break;
    case "rock":
      if (computer === "paper") {
      console.log("Computer Wins!");
      } else {
        console.log("playerOne wins!");
      }
      break;
    case "paper":
      if (computer === "scissors") {
      console.log("Computer Wins!");
      } else {
        console.log("playerOne wins!");
      }
      break;
    default:
      if (computer === "rock") {
      console.log("Computer Wins!");
      } else {
       console.log("playerOne wins!");
      }
      break;
}