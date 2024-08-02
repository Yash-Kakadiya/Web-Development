// 11. Write a JavaScript having a list of checkbox and by clicking on checkbox, it should show 
// list of selected value in comma separated format. (e.g. list of roll number as checkbox 
// value, and display selected roll number in comma separated format)

let num = document.querySelector(".numbers");
let list = document.querySelector(".list");
let n = 100;

for (let i = 1; i <= n; i++) {
    let inp = document.createElement("input");
    inp.setAttribute("type", "checkbox");
    inp.setAttribute("id", i);

    let label = document.createElement("label");
    label.setAttribute("for", i);
    label.innerHTML = i + "<br>";

    num.append(inp);
    num.append(label);
}

let getLi = document.querySelector("#getList");

getLi.addEventListener('click', check);

let numbers = [];
let pcount = 0;
function check() {
    for (let i = 1; i <= n; i++) {
        let inp = document.getElementById(i);
        if (inp.checked) {
            pcount++;
            let n = inp.getAttribute("id");
            numbers.push(n);
        }
    }
    list.innerHTML = numbers + "<br> Present count :" + pcount;
    numbers = [];
}