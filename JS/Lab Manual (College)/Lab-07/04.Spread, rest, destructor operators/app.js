// 4. Demonstrate the spread operator.


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
