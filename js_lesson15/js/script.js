// Objects

// Key-Value pairs in curly braces
const myObj = { name: "James"};
console.log(myObj);
console.log(myObj.name);


const anotherObj = {
  alive : true,
  answer: 42,
  hobbies: ["Music","Design","Jiu-Jitsu"],
  beverage: {
    morning: "Coffee",
    afternoon: "Fanta"
  },
  // object Method 👇
  action: function() {
    return `Time for ${this.beverage.morning}`;
  }
};

// Access specific part of object
console.log(anotherObj.alive);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["beverage"]);


// Another Example 
const vehicle = {
  wheels: 4,
  engine: function() {
    return "Vroooom!";
  }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); // Inheritance
console.log(truck.engine());

const band = {
  guitar: "Jimi Hendrix",
  bass: "Noel Redding",
  drums: "Mitch Mitchell",
};
console.log(Object.keys(band)); //Object.keys() ex: guitar
console.log(Object.values(band)); // Object.values() ex: Jimi Hendrix
// delete band.drums; => to delete an object value

// Using a for-in loop, to loop through an object
for (let job in band) {
  console.log(band[job]);
  console.log(`On ${job}, it's ${band[job]}!`); //Using values inside for-in loops
}

// Destructuring Objects

// Define variables by naming the key in an object the we want to pull the variable from

const { guitar: myVariable } = band;
console.log(myVariable);