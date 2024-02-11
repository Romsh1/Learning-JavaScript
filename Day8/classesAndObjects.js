/*Day 8
Romika Chaudhary
*/

//Creating student object
const student = {
    name: "Aman Chaudhary",
    age: 12,
    grade: 7,
    marks: 95,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};


const employee = {
    calcTax (){
        console.log("Tax rate is 13%");
    },
};

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__ = employee;


/*
Classes in JS
*/
class ToyotaCar {
    constructor(brand, mileage) {   //Initializing in the constructor
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

}

let fortuner = new ToyotaCar("Fortuner", 10);
let lexus = new ToyotaCar("Lexus");
console.log(lexus);


/*
Inheritance 
*/
class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {
}

let obj = new Child();


/*Using 
Super keyword */
class Person {
    constructor() {
        this.species = "homo Sapiens";
    }

    eat() {
        console.log("Eat");
    }
}

class Engineer extends Person{
    constructor(branch) {
        super();    //to invoke parent class constructor
        this.branch = branch;
    }

    work(){
        console.log("work");
    }
}

let engObj = new Engineer("Chemical Eng");


/* Practice 
Question 
*/
/* 
You are creating a website for your college. Create a class User
with 2 properties, name and email. It has a method called
viewData() that allows user to view website data.
*/
let data = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(name, email) {
        console.log("data = ", data);
    }
}

/* Create a new class called Admin which inherits 
from User. Add a new method called editData to Admin 
that allows to edit website data. */
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        data = "some new value";
    }
}

let std1 = new User("Asmita Chaudhary", "asmichau.16@gmail.com");
let std2 = new User("Romika Chaudhary", "romikachaudhari09@gmail.com");

let admin1 = new Admin("Admin","admin@college.com");



