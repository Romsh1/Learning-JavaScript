// Romika Chaudhary
// Day 40 - React Foundations
// March 19, 2024


function onButtonPress() {
    const countBtn = document.getElementById("btn").innerHTML;
    console.log(countBtn.split(" "))
    const currCounter = countBtn.split(" ")[1];
    const newCounter = parseInt(currCounter) + 1;
    document.getElementById("btn").innerHTML = "Counter " + newCounter;
}
