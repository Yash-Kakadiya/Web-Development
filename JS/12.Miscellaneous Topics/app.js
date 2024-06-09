// Miscellaneous Topics

{ //this keyword
    // ->refers to an object that is executing piece of code

    let obj = {
        a: 3,
        b: 4,
        sum: function () {
            return this.a + this.b;
        }
    };

    console.log(obj.sum());
}

{ //Arrow Functions

    const funcName = (arg1, arg2) => {
        //definition
    }
}

{ //Implicit return

    const add = (a, b) => (a + b);
    console.log(add(1, 2));
}

{ //Set Timeout

    setTimeout(() => {  //executes once
        console.log("Hello");
    }, 2000);
}

{ //Set Interval

    let id = setInterval(() => { //exetutes in loop until stops
        console.log("Set Interval");
    }, 2000);

    console.log("id: " + id);

    clearInterval(id); //to stop loop

    //Example


    let i = 1;
    let id2 = setInterval(() => {
        console.log(i);
        i++;
        if (i == 11) {
            clearInterval(id2);
        }
    }, 1000);

    let id3 = setInterval(() => {
        console.log("Hi");
    }, 1000);
    setTimeout(() => {
        clearInterval(id3);
    }, 5000);
}

{ //this with arrow function
    //->this of Arrow function = this of parent
    //->this of normal function = this of calling function

    const student = {
        name: "Yash",
        age: 19,
        abc: this, //window object
        getName: function () {
            console.log(this); //student object
            return this.name;
        },
        getAge: () => {
            console.log(this); //parent's this-> window object
            return this.age;
        },
        getInfo1: function () {
            setTimeout(() => {
                console.log(this); //student object
            }, 2000);
        },
        getInfo2: () => {
            setTimeout(() => {
                console.log(this); //window
            }, 2000);
        }
    };
}