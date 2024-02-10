/* Romika Chaudhary
Day 7 - Feb 10, 2024
Events in JS */

//Performing event handling
// let btn1 = document.querySelector("button");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log("btn1 was clicked");
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are inside div");
// }


//Performing event listener in button
// let btn1 = document.querySelector("button");
// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked. - handler 1");
//     console.log(evt);
//     console.log(evt.clientX);
// });

// const handler2 = (evt) => {
//     console.log("btn1 was clicked. - handler 2");
// }

// btn1.addEventListener("click", handler2);

// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked. - handler 3");
//     console.log(evt);
//     console.log(evt.clientX);
// });


//Performing remove event listener in button
// btn1.removeEventListener("click", handler2);



/* Practice Question 
Create a toggle button that changes the screen to dark-mode
when clicked and light-mode when clicked again.
*/
// let btnMode = document.querySelector("#mode");
// let currMode = "light";

// btnMode.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         // document.querySelector("body").style.backgroundColor="black";
//         document.querySelector("body").classList.add("dark");
//         document.querySelector("body").classList.remove("light");
//     } else{
//         currMode = "light";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//     }
//     console.log(currMode);
// });



// <!-- Building rock, paper and scssisor game -->
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You won";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (choiceIdUser) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if(choiceIdUser === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (choiceIdUser === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (choiceIdUser === "paper") {
            userWin = compChoice === "scissor" ? false : true;

        }else if (choiceIdUser === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    // console.log(choice);
    const choiceIdUser = choice.getAttribute("id");
    choice.addEventListener("click", () =>{
    playGame(choiceIdUser);
    });
});