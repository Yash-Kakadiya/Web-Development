
let btn = document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click", function () {
    console.log("clicked");
    p.innerText="clicked";
    console.dir(this);
});

btn.addEventListener("dblclick", function () {
    console.log("double clicked");
    p.innerText="double clicked";
});

btn.addEventListener("mousedown", function () {
    console.log("mouse down");
    p.innerText="mouse down";
});

btn.addEventListener("mouseup", function () {
    console.log("mouse up");
    p.innerText="mouse up";
});

btn.addEventListener("mouseover", function () {
    console.log("mouse over");
    p.innerText="mouse over";
});

btn.addEventListener("mouseout", function () {
    console.log("mouse out");
    p.innerText="mouse out";
});

btn.addEventListener("mouseenter", function () {
    console.log("mouse enter");
    p.innerText="mouse enter";
});

btn.addEventListener("mouseleave", function () {
    console.log("mouse leave");
    p.innerText="mouse leave";
});

btn.addEventListener("contextmenu", function () {
    console.log("context menu");
    p.innerText="context menu";
});

btn.addEventListener("mousewheel", function () {
    console.log("mouse wheel");
    p.innerText="mouse wheel";
});