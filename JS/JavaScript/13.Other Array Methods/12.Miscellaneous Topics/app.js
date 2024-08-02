//Other Array Methods

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);

{ // forEach
}

{ //map

    let double = arr.map(function (el) { return el * 2 });

    console.log(double);
}

{ //filter

    let even = arr.filter(function (el) { return el % 2 == 0 });

    console.log(even);
}

{ //every

    let allEven = arr.every(function (el) { return el % 2 == 0 });

    console.log(allEven);
}

{ //some

    let someEven = arr.some(function (el) { return el % 2 == 0 });

    console.log(someEven);
}

{ //reduce

    let sum = arr.reduce(function (a, b) { return a + b });

    console.log(sum);
}

{ //default parameters

    function add(a = 1, b = 2) {
        return a + b;
    }

    console.log(add(3, 4));
    console.log(add(3));
    console.log(add());
}

{ //spread operator

    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let arr3 = [...arr1, ...arr2];

    console.log(arr3);
    console.log(...arr3);
    console.log(Math.max(...arr3));

    const data = {
        email: "abc@123",
        password: "123"
    };

    const dataCopy = {
        ...data,
        id: "xyz"
    };

    console.log(data);
    console.log(dataCopy);

    let abc = [1, 2, 3];
    let abcDemo = { ...abc };   //index will became key

    console.log(abcDemo);
}

{ //rest operator

    function sum(...args) {
        return args.reduce((a, b) => a + b);
    };

    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}

{ //destructuring
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let [a, b, ...rest] = arr;
    console.log(a);
    console.log(b);
    console.log(rest);

    const student = {
        name: "abc",
        age: 20,
        username: "abc@123",
        password: "123"
    };
    let { username, password } = student;
    console.log(username);
    console.log(password);

    let { username: user, password: pass, city: location = "Mumbai" } = student;
    console.log(user);
    console.log(pass);
    console.log(location);
}