// Create a promise
const myPromise = new Promise((resolve, reject) => {
    const success = false; // change to true to resolve

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Consume the promise
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });