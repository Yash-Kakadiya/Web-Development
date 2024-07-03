// 6. Demonstrate the Array and Object Destructuring.

//destructuring

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
let { username, password,...restObj } = student;
console.log(username);
console.log(password);
console.log(restObj);

let { username: user, password: pass, city: location = "Mumbai" } = student;
console.log(user);
console.log(pass);
console.log(location);