//Fibonacci series

let n = parseInt(prompt("Enter number to terms for printing fbonacci series"));
let arr = [];
function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i <= n; i++) {
    arr.push(fibonacci(i));
}


console.log(arr);
document.write("<h3>" + arr + "</h3>");