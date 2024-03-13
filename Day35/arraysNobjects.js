//Day 35

//Filtering even numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.filter(num => num % 2 === 0);
console.log(newArr);

//Finding the biggest numbers in an array
let arr2 = [40, 100, 20, 56, 90, 97];
let max = 0;
for(i = 0; i < arr2.length; i++){
    if (max > arr2[i]){
        max = max;
    } else {
        max = arr2[i];
    }    
}
console.log(max);

//Printint a reverse array
let orderedArr = [1,2,3,4,5];
let reverseArr = orderedArr.reverse();
console.log(reverseArr);

//Printin firstname according to gender
//Concept of obj in array
const allUsers = [{
    firstName: "Romika",
    gender: "Female"
},
   {
    firstName: "Harsh",
    gender: "Male"
   },
   {
    firstName: "Inder",
    gender: "Male"
   } 
]

for (let i = 0; i < allUsers.length; i++){
    if (allUsers[i]["gender"] === "male"){
        console.log(allUsers[i]["firstName"]);
    }
}
