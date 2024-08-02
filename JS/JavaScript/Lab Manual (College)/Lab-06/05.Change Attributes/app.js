let inp = document.querySelector("#inp");
let v = inp.value;

inp.addEventListener("click", () => {
    inp.setAttribute("type", v);
});