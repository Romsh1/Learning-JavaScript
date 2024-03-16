// Romika Chaudhary
// March 15, 2024
// Day 37
// Async Await

function kiratAsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hi there!");
        }, 2000)
    });
    return p;
}

async function main() {
    let value = await kiratAsyncFunction()
    console.log(value);
}

main();