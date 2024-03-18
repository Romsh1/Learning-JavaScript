// Romika Chaudhary
// Day 38
// March 16, 2024

//Callbacks, Promises and Async-await

//Using Callbacks
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n* n;
}

function sumOfSth(a, b, fn) {
    let square = fn(a);
    let cube = fn(b);
    return square + cube;
}

let ans = sumOfSth(2, 3, cube);
console.log(ans);


console.log("Hi");

function onDone() {
    console.log("Click the buttton");
}
setTimeout(onDone, 5000);

console.log("Hi there");