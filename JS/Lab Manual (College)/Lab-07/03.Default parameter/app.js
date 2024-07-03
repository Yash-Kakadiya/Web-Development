// 3. Demonstrate the default parameter while using a function.

function add(a = 1, b = 2) {
    return a + b;
}

console.log(add(3, 4));
console.log(add(3));
console.log(add(undefined, 4));
console.log(add());