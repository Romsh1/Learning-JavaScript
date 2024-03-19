// Romika Chaudhary
// March 19, 2024
// Day 39

//arrow function
const sum = (a, b) => {
    return a + b;
}

const ans = sum(1, 2);
console.log(ans);


//map and filter
//Given and array, return a new array in which every value is multiplied by 2
//[1,2,3,4,5]

let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++){
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);


let newArr = arr.map(num => num * 2);
console.log(newArr);

let newArr2 = arr.filter(num => num % 2 == 0) ;
console.log(newArr2);
