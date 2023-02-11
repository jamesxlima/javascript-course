// Fetch API requires a discussion of...
// Callbacks, Promises, and Async/Await 

// Callbacks
function firstFunction(parameters, callback) {
    // Do stuff
    callback();
}

// AKA "Callback Hell"
firstFunction(param, function() {
    secondFunction(para, function() {
        thirdFunction(para, function() {});
    });
});


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

// 