//DOM -> Document Object Model

{ //Selecting elements

    let byID = document.getElementById('mainImg');
    console.log(byID);
    console.dir(byID);  //object

    let byClass = document.getElementsByClassName('images');
    console.log(byClass);
    console.dir(byClass);  //collection

    let byTag = document.getElementsByTagName('p');

    console.log(byTag);
    console.dir(byTag);  //collection


    //Selecting elements using querySelector() and querySelectorAll()

    let byQuery = document.querySelector('#mainImg');
    console.log(byQuery);
    console.dir(byQuery);

    let byQueryAll = document.querySelectorAll('.images');

    console.log(byQueryAll); //NodeList (objects)
    console.dir(byQueryAll); //NodeList (objects)

    let byQueryAll2 = document.querySelectorAll('p');

    console.log(byQueryAll2); //NodeList (objects)
    console.dir(byQueryAll2);
}

{ //Using properties and methods

    let p = document.querySelector("p");

    console.log(p.innerHTML);
    console.log(p.innerText);
    console.log(p.textContent);

    { //maniupulating attributes

        let img = document.querySelector("img");
        console.log(img.getAttribute("src"));

        img.setAttribute("src", "assets/creation_2.jpeg");
    }
    { //maniupulating styles
        // format: -> object.style.property="abc";
        p.style.color = "red";
    }
    { //class lists

        console.log(p.classList); //DOMTokenList 
        p.classList.add("newClass");
        p.classList.remove("newClass");
        console.log(p.classList.contains("newClass")); //boolean
        p.classList.toggle("newClass"); //if name exists->remove, else add
    }
    { //navigation

        console.log(p.parentElement);
        console.log(p.nextElementSibling);
        console.log(p.previousElementSibling);
        console.log(p.children); //HTMLCollection
        console.log(p.childElementCount); //number

        console.log(p.firstElementChild);
        console.log(p.lastElementChild);
        console.log(p.children[2]);

    }
    { //creating and removing elements

        let newP = document.createElement("p");
        newP.innerText = "This is a new paragraph";
        newP.classList.add("newClass");
        p.parentElement.insertBefore(newP, p);
        p.parentElement.appendChild(newP);
        // p.parentElement.replaceChild(newP, p);

        p.prepend(newP);
        p.append(newP);
        p.insertAdjacentElement("beforebegin", newP);
        p.insertAdjacentElement("afterbegin", newP);
        p.insertAdjacentElement("beforeend", newP);
        p.insertAdjacentElement("afterend", newP);

        p.parentElement.removeChild(newP);
        // newP.remove(newP);
    }

}

{ //DOM Event Listener
    let btn = document.querySelector("button");

    btn.addEventListener("click", function () {
        console.log("clicked");
        console.dir(this);   //this = element(object) who triggers event
    });

    btn.addEventListener("dblclick", function () {
        console.log("double clicked");
    });

    btn.addEventListener("mousedown", function () {
        console.log("mouse down");
    });

    btn.addEventListener("mouseup", function () {
        console.log("mouse up");
    });

    btn.addEventListener("mouseover", function () {
        console.log("mouse over");
    });

    btn.addEventListener("mouseout", function () {
        console.log("mouse out");
    });

    btn.addEventListener("mouseenter", function () {
        console.log("mouse enter");
    });

    btn.addEventListener("mouseleave", function () {
        console.log("mouse leave");
    });

    btn.addEventListener("contextmenu", function () {
        console.log("context menu");
    });

    btn.addEventListener("mousewheel", function () {
        console.log("mouse wheel");
    });


    let body = document.querySelector("body");

    body.addEventListener("keydown", function () {
        console.log("key down");
    });

    body.addEventListener("keyup", function () {
        console.log("key up");
    });

    body.addEventListener("keypress", function () {
        console.log("key press");
    });

    body.addEventListener("copy", function () {
        console.log("copy");
    });

    body.addEventListener("cut", function () {
        console.log("cut");
    });

    body.addEventListener("paste", function () {
        console.log("paste");
    });

    body.addEventListener("select", function () {
        console.log("select");
    });

    body.addEventListener("drag", function () {
        console.log("drag");
    });

    body.addEventListener("drop", function () {
        console.log("drop");
    });

    body.addEventListener("wheel", function () {
        console.log("wheel");
    });


    let inp = document.querySelector("input");
    inp.addEventListener("input", function () {
        console.log(this.value);
    });

    inp.addEventListener("focus", function () {
        console.log("focus");
    });

    inp.addEventListener("blur", function () {
        console.log("blur");
    });

    inp.addEventListener("change", function () {
        console.log(this.value);
    });

    inp.addEventListener("select", function () {
        console.log("select");
    });


}

{ // Form Events
    let form = document.querySelector("form");
    let pass = document.querySelector("#pass");

    form.addEventListener("submit", function (e) {
        e.preventDefault();  //to prevent default action
        console.log("form submitted");
        console.log("password :" + pass.value);
        console.log(this.elements[0]);
    });

}

{ //Event bubbling
    let a = document.querySelector(".a");
    let b = document.querySelector(".b");
    let c = document.querySelector(".c");

    a.addEventListener("click", function () {
        console.log("a clicked");
    });

    b.addEventListener("click", function () {
        console.log("b clicked");
    });

    c.addEventListener("click", function () {
        console.log("c clicked");
    });
}

{ //Event delegation -> event for new child element -> target is used in parent element
    let x = document.querySelector(".x");
    let y = document.querySelector(".y");
    let z = document.querySelector(".z");

    x.addEventListener("click", function () {
        console.log("x clicked");
    });

    y.addEventListener("click", function () {
        if (event.target.classList.contains('z')) {
            alert(event.target.textContent + ' clicked!');
        }
    });
}
