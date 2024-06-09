//Simon Game

let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("Game Started");
        levelUp();
    }
})

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;

    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    gameFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


function checkAns(idx) {
    // console.log("Current level: " + level);

    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("same value");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 300);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    console.log("Game Over!");
}