//Loops

{ //for loop

    // for (initialization; condition; updation){
    //     //do something
    // }

    console.log("For loop");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

{ //while loop

    // while (condition) {
    //     //do something
    // }

    console.log("while loop");
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

{ //do-while loop

    // do {
    //     //do something
    // } while (condition);

    console.log("do while loop");
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 10);
}

{ //for of loop

    // for (element of collection) {
    //      //do something
    //  }

    console.log("for of loop");
    let fruits = ["Mango", "Apple", "Papaya"];

    console.log(fruits);
    
    for (i of fruits) {
        console.log(i);
    }
}
{ //break keyword

    console.log("break keyword");
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}

{ //continue keyword

    console.log("coninue keyword");
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}