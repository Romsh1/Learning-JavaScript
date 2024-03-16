// Romika Chaudhary
// March 15, 2024
// Day 37
// Promises

function kiratsReadFile() {
    console.log("inside kiratsreadfile");
    return new Promise(function(resolve) {
        console.log("inside promise");
        fs.readFile("sentence.txt", "utf-8", function(err, data){
            console.log("before resolve");
            resolve(data);
        });
    })
}

function onDone(data) {
    console.log(data)
}

kiratsReadFile().then(onDone);


var d = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("foo");

    }, 1000)
});

function callback() {
    console.log(d);
}

d.then(callback)