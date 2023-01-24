// Loops

// Increment by 1 from 1-50.
let myNumber = 0;
while (myNumber < 50) {
  myNumber++;
  // myNumber += 2; Increments by 2
  console.log(myNumber);
}

// DO NOT create an endless loop

// Do While Loop
do {
  console.log(myNumber);
} while (myNumber < 50);

// For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let myName = "James";
for (let i = 0; i <= myName.length; i++) {
  console.log(myName.charAt(i));
}

let counter = 0;
let myLetter;
while (counter <= 4) {
  myLetter = myName[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "e") break;
  counter++;
}
console.log(counter);