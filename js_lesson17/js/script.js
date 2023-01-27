// JSON: JavaScript Object Notation 

/*JSON is used to send and receive data. JSON is a text format for storing and transporting data. It is completely language independent, meaning JSON is used to send & receive data in many languages...not just in JavaScript. */

const myObj = {
  name: "James",
  hobbies: ["Music", "Design", "Jiu Jitsu"],
  hello: function() {
    console.log("Hello!");
  }
};
console.log(myObj);
console.log(myObj.name); // Call the name
myObj.hello(); // Call the "hello" method
console.log(typeof myObj); // Object

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); // Converts Object into JSON
console.log(typeof sendJSON); // It is a string
// JSON does not send functions, so "hello" does not appear in the JSON file.


// JSON.parse()

/* When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object. */

// JSON.parse() = JSON to Object

const receiveJSON = JSON.parse(sendJSON); //JSON.parse() method
console.log(receiveJSON); // Returned as a JavaScript object
console.log(typeof receiveJSON); // The type is an object