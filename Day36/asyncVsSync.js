// Romika Chaudhary
// March 14
// Day 36
// Async vs Sync Functions

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    return findSum(100);
}

setTimeout(findSumTill100, 1000)
console.log("Hello World!");


//Reading files
const fs = require("fs");
fs.readFile("sentence.txt", "utf-8", function(err, data){
    console.log(data);
})