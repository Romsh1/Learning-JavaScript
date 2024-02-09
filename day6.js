/* Day 6
Feb 9, 2024 */

//DOM Manipulation
// 1 Selecting by id
let headings = document.getElementById("heading");
console.dir(headings);

//Selecting by class
let headings2 = document.getElementsByClassName("heading");
console.dir(headings2);
console.log(headings2);

//Selecting by tag
let paras = document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);


//Query Selector
let firstEle = document.querySelector("p");
console.dir(firstEle);

let allEle = document.querySelectorAll("p");
console.dir(allEle);

console.dir(document.body.firstChild);


// let div = document.querySelector("div");
// console.dir(div);


// Append "from Apna College students" to this text using JS
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College students";
console.dir(h2.innerText);



// <!-- Create 3 divs with common class name - "box". Access them
// and add some unique text to each of them -->
let divs = document.querySelectorAll(".box");
console.log(divs);
let idx = 1;
for (div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "New unique value 1";
// divs[1].innerText = "New unique value 2";
// divs[2].innerText = "New unique value 3";

// //Accessing div
// let div = document.querySelector("div");
// console.log(div);

//Getting attribute value
let id = div.getAttribute("id");
console.log(id);

let id2 = div.getAttribute("name");
console.log(id2);

//Setting attribute value
let name = document.querySelector("div");
console.log(div.setAttribute("name", "newName"));


//Style
// let div = document.querySelector("div");


let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);


let heading = document.querySelector("h1");
heading.innerHTML = "<i>Hi, I am new!</i>";
document.querySelector("body").prepend(h1.heading);

// let para = document.querySelector("p");
para.remove();


/* Practice Question */
// Create a new button element. Give it a text "click me",
// background color of red and text color of white.
// Insert the button as the first element inside the body tag.
let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.color = "white";
btn.style.backgroundColor = "red";

let body = document.querySelector("body");
body.prepend(btn);



/* Practice Question */
/* Create a <p> tag in html, give it a class and some styling.
Now create a new class in CSS and try to append this class
to the <p> element.
Did you notice, how you overwrite the class name when you
add a new one?
Solve this problem using classList.
*/
let para = document.querySelector("p");
para.classList.add("newClass");