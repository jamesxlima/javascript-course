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