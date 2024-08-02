//Conditional statements

{ //if-else statement

    let age = 18;

    if (age >= 18) {
        console.log("You are an adult");
    } else {
        console.log("You are not an adult");
    }
}

{ //ladder if-else statement

    let age = 18;

    if (age >= 18) {
        console.log("You are an adult");
    } else if (age >= 13) {
        console.log("You are a teenager");
    } else {
        console.log("You are a child");
    }
}

{ //nested if-else statement

    let age = 18;

    if (age >= 18) {
        console.log("You are an adult");
    } else {
        console.log("You are not an adult");
        if (age >= 13) {
            console.log("You are a teenager");
        } else {
            console.log("You are a child");
        }
    }
}

{ //switch statement

    let color = "green";

    switch (color) {
        case "red":
            console.log("Stop!");
            break;
        case "green":
            console.log("Go.");
            break;
        case "yellow":
            console.log("Slow Down.");
            break;
        default:
            console.log("Traffic light is broken");
            break;
    }
}