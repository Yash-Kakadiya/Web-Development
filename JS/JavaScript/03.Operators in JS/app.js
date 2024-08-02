{ //Arithmetic operators
    let a = 3, b = 4;
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
    console.log(a ** b);
}

{ //Unary operators

    let c = 6;
    console.log(++c);
    console.log(c++);
    console.log(--c);
    console.log(c--);
}

{ //Assignment operators

    let d = 10;

    d += 5;
    console.log(d);

    d -= 5;
    console.log(d);

    d *= 5
    console.log(d);

    d /= 5
    console.log(d);

    d %= 5
    console.log(d);

    d **= 5
    console.log(d);
}

{ //Comparison operators

    let e = 10;
    let f = 20;
    let str = "10";

    console.log(e > f);  //false
    console.log(e >= f); //false

    console.log(e < f); //true
    console.log(e <= f); //true

    console.log(e == f); //false
    console.log(e != f); //true

    console.log(e == str); //true(ignores type)
    console.log(e === str); //false(doesn't ignores)

    console.log(0 == ""); //true
    console.log(0 === ""); //false

    console.log(0 == false); //true
    console.log(0 === false); //false

    console.log(null == undefined); //true
    console.log(null === undefined); //false


    console.log(0 == null); //false

    console.log(0 == undefined); //false

    console.log(0 == NaN); //false

}

{ //Logical operator

    let g = 10;
    let h = 20;
    let i = 30;
    let j = 40;

    console.log(g > h && i > j); //false

    console.log(g > h || i > j); //false

    console.log(!(g > h && i > j)); //true

    console.log(!(g > h || i > j)); //false
}