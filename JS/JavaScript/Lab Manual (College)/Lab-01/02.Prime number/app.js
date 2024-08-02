//Prime Number
let n = parseInt(prompt("Enter number to check whether it is prime or not"));

let ans = function (n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return (n + " is not a prime number");
        }
    }
    return (n + " is a prime number");
}

alert(ans(n));
document.write(ans(n));