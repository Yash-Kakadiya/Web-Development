//Callback Hell(Callback Nesting)

//Example:1

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("orange", 1000, () => {
                });
            });
        });
    });
});

//Example:2

function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 5) {
        success();
    } else {
        failure();
    }
}
savetoDb(
    "Yash", () => {
        console.log("success1 : Data Saved");
        savetoDb(
            "Ronit", () => {
                console.log("success2 : Data Saved");
                savetoDb(
                    "Mihir", () => {
                        console.log("success3 : Data Saved");
                    },
                    () => {
                        console.log("failure3 : weak connection");
                    }
                );
            },
            () => {
                console.log("failure2 : weak connection");
            }
        )
    },
    () => {
        console.log("failure1 : weak connection");
    }
);