let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    li.appendChild(delBtn);

    // delBtn.addEventListener("click", function () {
    //     li.remove(); //can't remove existing element
    // });

    ul.appendChild(li);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove(par);   //can't remove new element
//     });
// }

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        par.remove(par);
    }
});