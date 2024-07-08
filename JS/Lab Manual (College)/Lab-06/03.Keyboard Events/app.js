let body = document.querySelector("body");
let p = document.querySelector("p");

body.addEventListener("keydown", function () {
    console.log("key down");
    p.innerHTML = "key down";
});

body.addEventListener("keyup", function () {
    console.log("key up");
    p.innerHTML = "key up";
});

body.addEventListener("keypress", function () {
    console.log("key press");
    p.innerHTML = "key press";
});

body.addEventListener("copy", function () {
    console.log("copy");
    p.innerHTML = "copy";
});

body.addEventListener("cut", function () {
    console.log("cut");
    p.innerHTML = "cut";
});

body.addEventListener("paste", function () {
    console.log("paste");
    p.innerHTML = "paste";
});

body.addEventListener("select", function () {
    console.log("select");
    p.innerHTML = "select";
});

body.addEventListener("drag", function () {
    console.log("drag");
    p.innerHTML = "drag";
});

body.addEventListener("drop", function () {
    console.log("drop");
    p.innerHTML = "drop";
});
