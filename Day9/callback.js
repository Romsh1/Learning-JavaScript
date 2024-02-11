/*
Romika Chaudhary
Day 9 
Async wait, promise chains and callback hell
*/

//Trying asynchronous wait
console.log(1);
console.log(2);
setTimeout(() => {
    console.log("Hello, I am Romika");
}, 4000);
console.log(3);


/*
Callback 
*/
//nested if
let age = 19;
if (age >= 18){
    if(age >= 60){
        console.log("Senior");
    }else{
        console.log("middle");
    }

}else{
    console.log("child");
}


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000);
}

//Displaying data one after another
//Callback Hell
getData(1, () => {
    getData(2, () => {
        getData("rom", () => {
            getData("AASA");
        });
    });
});


/*
Promises
*/
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("Success");
    reject("Some error");
});



const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve(123);
    });
};

/* For resolve -> .then(),
For reject -> .catch()
*/

let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled");
});


let promise2 = getPromise();
promise2.catch((err) => {
    console.log("Error occurred");
});


/*
Promise Chains
*/
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("Success");
        }, 2000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("Success");
        }, 6000);
    });
}


console.log("fetching data1...");
asyncFunc1().then((res)=> {
    console.log("fetching data2...");
asyncFunc2().then((res)=> {
    });
});



/* Async
await -- returns a promise compulsarily
*/
async function hello(){
    console.log("Hello");
}

async function getWeatherData() {
    await api(); //1st call
    await api(); //2nd call
}

function api(apiId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data", apiId);
            resolve(200);    
        }, 2000);
    });
};

 
/*
Async Await
*/
async function getAllData() {
    await api(1);
    await api(2);
    await api(3);
}


/*
IIFE -> can not reuse
     -> mostly used for a single call function
*/
(async function () {
    await api(1);
    await api(2);
    await api(3);
}) ();

