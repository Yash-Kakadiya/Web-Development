//GCD of two numbers

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));

let gcd = function (a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

alert("GCD of " + a + " and " + b + " is " + gcd(a, b));
document.write("GCD of " + a + " and " + b + " is " + gcd(a, b));