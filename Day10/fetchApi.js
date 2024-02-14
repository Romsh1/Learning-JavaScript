/*
Romika Chaudhary
Fetch API
Day 10 
Feb 13, 2024
*/

// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const factBtn = document.querySelector("#btn");

//Using async-await
// const getFacts = async () => {
//     console.log('Getting data...');
//     let response = await fetch(URL);
//     console.log(response);  //JSON
//     let data = await response.json();
//     factPara.innerText = data[0].text;
// };


/*Fetch API using 
Promise chaining
*/
// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
// }

// factBtn.addEventListener("click", getFacts);




