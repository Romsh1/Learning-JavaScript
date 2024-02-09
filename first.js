console.log("My first JavaScript Project.");
console.log("Romika Chaudhary");
console.log("I love JavaScript.");

fullName = "Tony Stark";
x = null;
y = undefined;
isFollow = true;
console.log(isFollow);


//Create an array of random numbers and using fat arrow function find max, min, avg, mode and median
let randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
console.log(randomNumbers);

let maxNumber = Math.max(...randomNumbers);
console.log("Maximum random number:", maxNumber);

let minNumber = Math.min(...randomNumbers);
console.log("Minimum random numbers:", minNumber);

function calculateAverageOfArray(randomNumbers) {
    var total = 0;
    var count = 0;

    jQuery.each(randomNumbers, function(index, value) {
        total += value;
        count++;
    });

    return total / count;
}

console.log(calculateAverageOfArray(arry));

let avgNumber = Math.avg(...randomNumbers);
console.log("Average number:", calculateAverageOfArray(randomNumbers));

let fullName = "Romika Chaudhary";
fullName = "Amanu";
console.log(fullName);

const PI = 3.14;
console.log(PI);

let age = 22;
console.log(typeof(age));

isFollow = true;
typeof is

console.log("Hey");


let x = BigInt("123");
let y = Symbol("Hello");

const student = {
    fullName : "Romika Chaudhary",
    age : 22,
    gpa : 3.77,
    isPass : true
};


const product = {
    prodName : "Parker Jotter Standard CT Ball Pen (Black)",
    rating : 4,
    price : 270,
    offer: 5
};

const profile = {
    username: "shradhakhapra",
    noOfPosts: 195,
    followers: "569K",
    following: 4,
    occupation: "Entrepreneur",
    quote: "To educate someone is the highest privilege"
};

console.log(typeof profile["username"]);


//Unary Operator
let a = 5;
let b = 2;

console.log("a = ", a, " & b = ", b);
a += 1;
console.log("a = ",a);

//Pre and Post
console.log("a++ = ", a++);
console.log("a: ",a)

console.log("++a = ", ++a);
console.log("a: ",a)

//Assignment Operator
// let a = 5;
// let b = 2;

a += 4;
a -= 4;
a *= 4;
a /= 4;
a **= 4;
console.log(a);

//Comparison Operator
// let a = 5;  //number
// let b = "5";    //string

console.log("a === b: ", a === b);
console.log("5 != 2: ", a != b);

//Logical Operator
// let a = 6;
// let b = 5;

let cond1 = a > b;
let cond2 = a === 5;
console.log("cond1 && cond2 = ", cond1 && cond2);

//Conditional statement
// let age = 22;
if (age >= 18){
    console.log("You are eligible to vote.")
}else{
    console.log("You are not eligible to vote.")
}

//Odd or Even
let num = 20;

if (num % 2 == 0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

//Ternary operator
// let age = 16;
age >= 18 ? console.log("adult") : console.log("not adult");

//MDN DOCS - Documentation by developers for developers
/* Getting a user input and 
    check if the number is a multiple of 5 or not */
let num = prompt("Enter a number: ");
if (num % 5 === 0){
    console.log(num, " is multiple of 5.");
} else{
    console.log(num, " is not a mupltiple of 5.");
}



/* Getting grades from students
    and providing grade */

let score = prompt("Enter your score: ");
if (score >= 80 && score <= 100){
    console.log("Your grade is A");
}
else if (score >=70 && score <= 89){
    console.log("Your grade is B");
}else if (score >= 60 && score <= 69){
    console.log("Your grade is C");
}
else if (score >= 50 && score <= 59){
    console.log("Your grade is D");
}else{
    console.log("Your grade is F");
}



//Loops in JS
//Printing Apna College five times
for (let i = 0; i < 5; i++){
    console.log("Apna College");
}

//Calculating sum of 1 to n
let sum = 0
let n = 100
for (let i = 1; i <= n; i++){
    sum += i;
}
console.log("The sum is :", sum);


//While loops
let i = 1;
while(i <= 5){
    console.log('Hello World!');
    i++;
}


//do-while loop
// let i = 20;
// do {
//     console.log("Apna College");
//     i++;
// } while (i <= 10);


//for-of loop
let str = "Aatmanirbhar";
let size = 0;
for (let i of str){ //iterator
    console.log("i = ", i);
    size++;
}

console.log("The size of ", str, "is", size);


//for-in loop (for objects)
// let student = {
//     name: "Aman Chaudhary",
//     age: 20,
//     gpa: 3.8,
//     isPass: true
// };

for (let key in student){
    console.log(key, ": ", student[key]);
}


//Practice questions
//Q1
//Print all even numbers from 0 to 100
// let n = 100;
for (i = 0; i <= n; i++){
    if (i % 2 == 0){
        console.log("Even number is: ", i);
    }
}


//Q2
/*
    Create a game where you start with any random game number. Ask
    the user to keep guessing the game number until the user enters the 
    correct value.
*/
let gameNo = 25;
let guess = prompt("Please enter your guess number: ");
if (guess == gameNo){
    console.log("Both are same.")
}else{
    console.log("Try again!");
}

// using while loop
while (guess != gameNo){
    guess = prompt("You entered wrong number! Please enter your guess number: ");
}
console.log("Congratulations! Your guess matched.");


//Creating string
// let str = "Apna College";
let str2 = 'Romika';
console.log(str.length);
console.log(str[11]);


//Template Literals
let specialString = `This is a template literal ${98 + 95}`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
    item: "pen",
    price: 10
};

// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);


//Practice Question
/*
    Prompt the user to enter their full name. Generate a username for them
    based on the input. Start username with @, followed by their full name and 
    ending with the fullname length.
*/

let fullname = prompt("Please enter your full name: ");
// let size = fullname.length;
let special = "@";
let concat = special.concat(fullname.concat(size));

let output = `Your username is ${concat}`;
console.log(output);


//Array in JS
let marks = [12, 23, 45, 67, 89];
console.log(marks);
console.log(marks[marks.length - 1]);
marks[2] = 66;
console.log(marks);


let heroes = ["ironman", "thor", "spiderman", "Shaktiman", "Hulk"];
console.log(heroes.length);
heroes[0] = "Rom";
console.log(heroes);


/* Looping over an array */
let heroes = ["ironman", "thor", "spiderman", "Shaktiman", "Hulk"];

//Using for loop
// for (let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }


//for of
// for (let val of heroes){
//     console.log(val);
// }


/*For a given array with marks of students -> [85,97,44,37,76,60]
Find the average marks of the entire class*/
let marks = [85,97,44,37,76,60];
// let sum = 0;
let avg;
for (let i = 0; i < marks.length; i++){
    sum += marks[i];
}
console.log(`The sum of array is ${sum}`);
console.log(`The average of array is ${sum/marks.length}`);

/* For a given array with prices of 5 items -> [250,645,300,900,50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer. */
let price = [250,645,300,900,50];
for (let i = 0; i < price.length; i++){
    let val = price[i] * (10/100);
    price[i] -= val;
}
console.log(price);


// let price = [250,645,300,900,50];
// let i = 0;
for (let val of price) {
    let offer = val/10;
    price[i] = price[i] - offer;
    console.log(`Value after offer = ${price[i]}`);
    i++;
}


let fruits = ["Apple", "Banana", "Pomogranate"];
let animals = ["Squarrel", "Tiger", "Lion", "Panda", "Kiwi", "Vulture"];
let food = ["Momo", "Chowmein", "Fried Rice"];
fruits.push("Dragon Fruit", "Kiwi", "Avocado", "Pineapple");
fruits.pop();
console.log(fruits.toString());
console.log(fruits);

//Concatenating multiple arrays
console.log(fruits.concat(animals, food));
fruits.unshift("Litchi");
fruits.shift();

//Change is made on new array
animals.slice(1,5);
console.log(animals.slice(1,5));

//Splice changes the original arrage - used to add, delete and replace elements
console.log(animals.splice(-4,3));
console.log(animals);


// let arr = [1,2,3,4,5,6,7];
//add element
// console.log(arr.splice(2,0,101));
//delete element
// arr.splice(3,1);
//replace element
// arr.splice(3,0,98);


/* 
Practice Question
Create an array to store companies ->
"Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber and Add Ola in its place
c. Add Amazon at the end
*/
 let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//a
companies.splice(0,1);
//b
 companies.splice(2,1,"Ola");
//c
companies.push("Amazon");


//Functions in JS
function myFunction (){
    console.log("Welcome to Apna College!");
    console.log("We are learning JS.");
}
myFunction();


//Calculate sum of two number
function sum(x, y){
    sum = x + y;
    return `The sum is ${sum}`;
}

let val = sum(90, 95);
console.log(val);



//sum function
const sum = (a, b) => {
    console.log(a + b);
}

//Multiplication function
const multiply = (a, b) => {
    console.log(a * b);
}

const printHello = () => console.log("Hello");


//Practice Question
/* Create a function using the "function" keyword that takes a String as
an argument and returns the number of vowels in the string. */
function vowelFunc(userInput){
    let word = prompt("Enter a word: ");
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < word.length; i++){
        if ((word.charAt(i) === vowel[0]) || (word.charAt(i) === vowel[1]) || (word.charAt(i) === vowel[2]) || (word.charAt(i) === vowel[3]) || (word.charAt(i) === vowel[4])) 
        {
            count += 1;
        }
    }
    console.log(`The count of vowel in word ${word} is ${count}`);
}


//Using for loop only
let word = "romika";
let vowel = ["a", "e", "i", "o", "u"];
let count = 0;
// console.log(word.charAt(0));
for (let i = 0; i < word.length; i++){
    console.log(word.charAt(i));
    if ((word.charAt(i) === vowel[0]) || (word.charAt(i) === vowel[1]) || (word.charAt(i) === vowel[2]) || (word.charAt(i) === vowel[3]) || (word.charAt(i) === vowel[4])) 
    {
        count += 1;
    }
}
console.log(count);


//Another method
function countVowels(str){
    let count = 0;
    //"ApnaCollege", count = 0
    for (const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}


/* Create an arrow function to perform the same task */
const vowelFunc = (userInput) => {
    let word = prompt("Enter a word: ");
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < word.length; i++){
        if ((word.charAt(i) === vowel[0]) || (word.charAt(i) === vowel[1]) || (word.charAt(i) === vowel[2]) || (word.charAt(i) === vowel[3]) || (word.charAt(i) === vowel[4])) 
        {
            count += 1;
        }
    }
    console.log(`The count of vowel in word ${word} is ${count}`);
}



//forEach Loop in Arrays
// function myFunction(num) {
//     return num;
// }

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){ //val means value at each index
//     console.log(val);
// })


// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val);
// });


// let arr = ["Dang", "Kathmandu", "Kapilvastu", "Itahari", "Banke"];
// arr.forEach((val, idx, arr) =>{
//     console.log(val.toUpperCase(), idx, arr);
// });



/*
    For a given array of numbers, print the square of each value using the 
    forEach loop.
*/
//Using for loop
// let arr = [1,2,3,4,5,6,7,8,9,10];
let sqr;
for (let i = 0; i < arr.length; i++){
    sqr = arr[i] * arr[i];
    console.log(`The square of ${arr[i]} is ${sqr}`);
}


//Using for each
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((arr) => {
//     console.log(arr * arr);
// })


// let nums = [90,98,95];
// let newArr = nums.map((val) => {
//     return val + 1;
// });
// console.log(newArr);


// let newArray = nums.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(newArray);


// let arr = [1,2,3,4];
// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output);


//Returning largest value in array
// let arr = [1,2,3,4];
// const output = arr.reduce((res, curr) => {
//     return res > curr ? res : curr;
// });
// console.log(output);


/* Practice Questions */
/*
We are given array of marks of students.
Filter out the marks of students that scored 90+
*/
let marks = [90, 35, 67, 98, 95, 80, 93];
let highScore = marks.filter((val) => {
    return val > 90;
});
console.log(highScore);


/*
Take a number n as input from user.
Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
// let n = prompt("Please enter a number: ");
// let arr = [];
// for (let i = 1; i <= n; i++){
//         console.log(arr.push(i));
// }

// // const output = arr.reduce((res, curr) =>{
//     return res + curr;
// });
// console.log(`The sum of ${n} numbers in the array is ${output}`);

// const result = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log(`The product of ${n} numbers in the array is ${result}`);