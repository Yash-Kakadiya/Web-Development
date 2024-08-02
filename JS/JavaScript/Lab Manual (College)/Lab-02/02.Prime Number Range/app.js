//Print prime in range

let a = parseInt(prompt("Enter number for start checking prime number"));
let b = parseInt(prompt("Enter last number for check prime"));

let ans = function (n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = a; i <= b; i++) {
    if (ans(i) == true) {
        console.log(i);
        document.write(i + "<br>");
    }
}