// Fetch API requires a discussion of...
// Callbacks, Promises, and Async/Await 

// Callbacks
function firstFunction(parameters, callback) {
    // Do stuff
    callback();
}

// AKA "Callback Hell"
/* firstFunction(param, function() {
    secondFunction(para, function() {
        thirdFunction(para, function() {});
    });
}); */


// Promises
// 3 states: Pending, Fulfilled, Rejected 

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("Yes! Resolved the promise!");
    } else {
        reject("No! Rejected the promise!");
    };
});

console.log(myPromise);

myPromise
.then(value => {
    console.log(value);
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
})

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});

// Using the Fetch API 👇
const users = fetch("https://jsonplaceholder.typicode.com/users");

// Pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    })
});