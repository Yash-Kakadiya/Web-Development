//7. Demonstrate the Arrow functions.

{ //Functions

    // function funcName(arg1, arg2, ...) {
    //     //do something
    //     return result;
    // }

    function add(a, b) {
        console.log(a + b);
    }

    function subs(a, b) {
        return a - b;
    }

    let mul = function (a, b) {
        return a * b;
    }

    let demo = () => {
        console.log("demo called")
    }
    demo();

    add(10, 20);
    // console.log(subs(10, 20));

    let ans = subs(10, 20);
    console.log(ans);
    console.log(mul(10, 20));

}


{ //Higher order functions
    { // (1)function which takes one or more function as arguments OR

        function multipleGreet(func, count) { //higher order function
            for (let i = 1; i <= count; i++) {
                func();
            }
            let greet = function () {
                console.log("hello");
            }
            multipleGreet(greet, 1000);
        }
    }
    { // (2)function which returns a function

        function oddOrEvenFactory(request) {
            if (request == "odd") {
                return function (n) {
                    console.log(n % 2 != 0);
                }
            } else if (request == "even") {
                return function (n) {
                    console.log(n % 2 == 0);
                }
            } else {
                console.log("wrong request");
            }
        }

        let request = "odd";
        let ans = oddOrEvenFactory(request);
        ans(10);
    }
}

{ //Methods
    // ->function created in object is called method

    let obj = {
        a: 10,
        b: 20,
        c: 30,
        add: function (a, b) {
            console.log(a + b);
        },
        subs(a, b) {
            console.log(a - b);
        }
    }

    obj.add(3, 4);
    obj.subs(3, 4);
}