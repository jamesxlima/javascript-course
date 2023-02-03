// Local Storage & Session Storage API

// Web Storage API

// Not part of the DOM - refers to the Window API
// Avaliable to JS via the global variable: window

// We do not have to type window. It is implied:
window.alert("Ok!");
alert("Ok!");

window.alert(window.location); // Returns the URL of a website
alert(location);


// Web Storage is part of the global window object
window.localStorage
window.sessionStorage

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "James",
  hobbies: ["eat", "sleep", "code"],
  logName: function() {
    console.log(this.name);
  }
};

myObject.logName();

// Data in sessionStorage is cleared when the page session ends.
// Data in localStorage() is saved across browser sessions.

//sessionStorage
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

// Local Storage
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

// .key retrieves a specific index position
const key = localStorage.key(0); // Expected Result: "myLocalStore"
console.log(key);

// Return how many keys are in storage 
const storeLength = localStorage.length;
console.log(storeLength);