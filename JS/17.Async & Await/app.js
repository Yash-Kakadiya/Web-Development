//Async & Await

//Async keyword-> by default returns a promise

async function greet() {
    // throw "404 page not found";
    return "hello";
}

greet()
    .then((result) => {
        console.log("promise resolved");
        console.log("result: ", result);
    })
    .catch((error) => {
        console.log("promise rejected");
        console.log("error: ", error);
    });

//await keyword-> pauses the execution of the async function until the promise is resolved(can only be used in asyn function only)

//Example : 1

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed.");
        }, delay);
    })
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        changeColor("orange", 1000);
    }
    catch (error) {
        console.log("error: ", error);
    }
    finally {
        console.log("demo finally executed");
    }
}
demo();