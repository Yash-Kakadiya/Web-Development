//9. Write a JavaScript that handles following mouse events. Add necessary elements. (B)JavaScript gives the key code for the key pressed.If the key pressed is “a”,“e”,“i”,“o”,“u”, the script should announce that vowel is pressed.When the key is released background should change to blue.

let body = document.querySelector("body");

body.addEventListener('keypress', (e) => {
    let ch = e.key;
    if ("aeiouAEIOU".indexOf(ch) != -1) {
        console.log(e.key);
    }
    body.style.background = "white";
});

body.addEventListener('keyup', (e) => {
    body.style.background = "blue";
});