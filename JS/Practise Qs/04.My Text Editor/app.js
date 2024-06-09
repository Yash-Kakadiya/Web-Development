let inp = document.querySelector("#text");
let p = document.querySelector(".para");

inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerHTML = inp.value;
});