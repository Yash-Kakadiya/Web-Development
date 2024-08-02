//WAP to change background color on click of button.

let btn = document.querySelector("#btn");
let body = document.querySelector('body');

btn.addEventListener('click', () => {
    body.remove
    let r = parseInt((Math.random() * 255));
    let g = parseInt((Math.random() * 255));
    let b = parseInt((Math.random() * 255));
    body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});