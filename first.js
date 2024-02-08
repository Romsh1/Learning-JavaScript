// console.log("My first JavaScript Project.");
// console.log("Romika Chaudhary");
// console.log("I love JavaScript.");

// fullName = "Tony Stark";
// x = null;
// y = undefined;
// isFollow = true;
// console.log(isFollow);


//Create an array of random numbers and using fat arrow function find max, min, avg, mode and median
// let randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
// console.log(randomNumbers);

// let maxNumber = Math.max(...randomNumbers);
// console.log("Maximum random number:", maxNumber);

// let minNumber = Math.min(...randomNumbers);
// console.log("Minimum random numbers:", minNumber);

// function calculateAverageOfArray(randomNumbers) {
//     var total = 0;
//     var count = 0;

//     jQuery.each(randomNumbers, function(index, value) {
//         total += value;
//         count++;
//     });

//     return total / count;
// }

// console.log(calculateAverageOfArray(arry));

// let avgNumber = Math.avg(...randomNumbers);
// console.log("Average number:", calculateAverageOfArray(randomNumbers));

// let fullName = "Romika Chaudhary";
// fullName = "Amanu";
// console.log(fullName);

// const PI = 3.14;
// console.log(PI);

// let age = 22;
// console.log(typeof(age));

// isFollow = true;
// typeof is

// console.log("Hey");


// let x = BigInt("123");
// let y = Symbol("Hello");

// const student = {
//     fullName : "Romika Chaudhary",
//     age : 22,
//     gpa : 3.77,
//     isPass : true
// };


// const product = {
//     prodName : "Parker Jotter Standard CT Ball Pen (Black)",
//     rating : 4,
//     price : 270,
//     offer: 5
// };

// const profile = {
//     username: "shradhakhapra",
//     noOfPosts: 195,
//     followers: "569K",
//     following: 4,
//     occupation: "Entrepreneur",
//     quote: "To educate someone is the highest privilege"
// };

// console.log(typeof profile["username"]);


//Unary Operator
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// a += 1;
// console.log("a = ",a);

//Pre and Post
// console.log("a++ = ", a++);
// console.log("a: ",a)

// console.log("++a = ", ++a);
// console.log("a: ",a)

//Assignment Operator
// let a = 5;
// let b = 2;

// a += 4;
// a -= 4;
// a *= 4;
// a /= 4;
// a **= 4;
// console.log(a);

//Comparison Operator
// let a = 5;  //number
// let b = "5";    //string

// console.log("a === b: ", a === b);
// console.log("5 != 2: ", a != b);

//Logical Operator
// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 && cond2 = ", cond1 && cond2);

//Conditional statement
// let age = 22;
// if (age >= 18){
//     console.log("You are eligible to vote.")
// }else{
//     console.log("You are not eligible to vote.")
// }

//Odd or Even
// let num = 20;

// if (num % 2 == 0){
//     console.log("The number is even");
// }else{
//     console.log("The number is odd");
// }

//Ternary operator
// let age = 16;
// age >= 18 ? console.log("adult") : console.log("not adult");

//MDN DOCS - Documentation by developers for developers
/* Getting a user input and 
    check if the number is a multiple of 5 or not */
// let num = prompt("Enter a number: ");
// if (num % 5 === 0){
//     console.log(num, " is multiple of 5.");
// } else{
//     console.log(num, " is not a mupltiple of 5.");
// }



/* Getting grades from students
    and providing grade */

// let score = prompt("Enter your score: ");
// if (score >= 80 && score <= 100){
//     console.log("Your grade is A");
// }
// else if (score >=70 && score <= 89){
//     console.log("Your grade is B");
// }else if (score >= 60 && score <= 69){
//     console.log("Your grade is C");
// }
// else if (score >= 50 && score <= 59){
//     console.log("Your grade is D");
// }else{
//     console.log("Your grade is F");
// }



//Loops in JS
//Printing Apna College five times
// for (let i = 0; i < 5; i++){
//     console.log("Apna College");
// }

//Calculating sum of 1 to n
// let sum = 0
// let n = 100
// for (let i = 1; i <= n; i++){
//     sum += i;
// }
// console.log("The sum is :", sum);


//While loops
// let i = 1;
// while(i <= 5){
//     console.log('Hello World!');
//     i++;
// }


//do-while loop
// let i = 20;
// do {
//     console.log("Apna College");
//     i++;
// } while (i <= 10);


//for-of loop
// let str = "Aatmanirbhar";
// let size = 0;
// for (let i of str){ //iterator
//     console.log("i = ", i);
//     size++;
// }

// console.log("The size of ", str, "is", size);


//for-in loop (for objects)
// let student = {
//     name: "Aman Chaudhary",
//     age: 20,
//     gpa: 3.8,
//     isPass: true
// };

// for (let key in student){
//     console.log(key, ": ", student[key]);
// }


//Practice questions
//Q1
//Print all even numbers from 0 to 100
// let n = 100;
// for (i = 0; i <= n; i++){
//     if (i % 2 == 0){
//         console.log("Even number is: ", i);
//     }
// }


//Q2
/*
    Create a game where you start with any random game number. Ask
    the user to keep guessing the game number until the user enters the 
    correct value.
*/
// let gameNo = 25;
// let guess = prompt("Please enter your guess number: ");
// if (guess == gameNo){
//     console.log("Both are same.")
// }else{
//     console.log("Try again!");
// }

//using while loop
// while (guess != gameNo){
//     guess = prompt("You entered wrong number! Please enter your guess number: ");
// }
// console.log("Congratulations! Your guess matched.");


//Creating string
// let str = "Apna College";
// let str2 = 'Romika';
// console.log(str.length);
// console.log(str[11]);


//Template Literals
// let specialString = `This is a template literal ${98 + 95}`;
// console.log(specialString);
// console.log(typeof specialString);

// let obj = {
//     item: "pen",
//     price: 10
// };

// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);


//Practice Question
/*
    Prompt the user to enter their full name. Generate a username for them
    based on the input. Start username with @, followed by their full name and 
    ending with the fullname length.
*/

let fullname = prompt("Please enter your full name: ");
let size = fullname.length;
let special = "@";
let concat = special.concat(fullname.concat(size));

let output = `Your username is ${concat}`;
console.log(output);