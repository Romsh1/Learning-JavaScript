// Romika Chaudhary
// Day 36
// Loops, Functions and Callback

//function to find the square
function square(n) {
    return n * n;
}

//function to find the cube
function cube(n) {
    return n * n* n;
}

//function to calculate sum of squares
function sumOfSquare(a, b) {
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

//function to calculate sum of cubes
function sumOfCube(a,b,c) {
    const val1 = cube(a);
    const val2 = cube(b);
    const val3 = cube(3);
    return val1 + val2 + val3;
}

console.log("The sum of cube is " + sumOfCube(4, 9, 5) + ".");
console.log("The sum of square is " + sumOfSquare(4, 9) + ".");