//Callback Hell(Callback Nesting)

//Example:1

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })

};

changeColor("red", 1000)
    .then(() => {
        console.log("red changed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green changed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue changed");
        return changeColor("yellow", 1000);
    })
    .then(() => {
        console.log("yellow changed");
        return changeColor("orange", 1000);
    });

//Example:2

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 5) {
            success("success : data saved");
        } else {
            failure("failure : weak connection");
        }
    });
}
savetoDb("Yash")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise : ", result);
        return savetoDb("Ronit");

    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise : ", result);
        return savetoDb("Mihir");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise : ", result);
        return savetoDb("Hello World");
    })
    .catch((error) => {
        console.log("promise rejected", error);
        console.log("error : ", error);
    });