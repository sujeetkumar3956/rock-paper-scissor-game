let userCount = 0;
let computerCount = 0;



let userCountt = document.querySelector(".zero");
let para = document.querySelector(".btn-para");
let compCount = document.querySelector(".zeroo")

let images = document.querySelectorAll(".image");
const genCompChoice = () => {
    let obj = ["paper", "rock", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3)
    return obj[randomIdx]
}
const showWinner = (userWin, userChoice, computerGenerate) => {
    if (userWin) {
        userCount++;
        userCountt.innerText = userCount;
        para.innerText = `you win your ${userChoice} beats ${computerGenerate}`;
        para.style.backgroundColor = "green";
    }
    else {
        computerCount++;
        compCount.innerText = computerCount;
        para.style.backgroundColor = "red";
        para.innerText = `you lose ${computerGenerate} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    console.log("user Choice is =", userChoice)
    const computerGenerate = genCompChoice();
    console.log("computer choice=", computerGenerate)
    if (userChoice === computerGenerate) {
        console.log("draw");
        para.innerText = "draw"
        para.style.backgroundColor = "blue";
    } else {
        let userWin = true;
        if (userChoice == "paper") {
            userWin = computerGenerate == "scissors" ? false : true;
        }
        else if (userChoice == "rock") {
            userWin = computerGenerate == "paper" ? false : true;
        }
        else {
            userWin = computerGenerate == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerGenerate)
    }
}


images.forEach((image) => {
    image.addEventListener("click", () => {
        let userChoice = image.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice)
    });
});