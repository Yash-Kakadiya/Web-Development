//Factorial
let n = parseInt(prompt("Enter number to find factorial "));

let ans = function (n) {
        if (n == 0) {
            return 1;
        }
    return n*ans(n-1);
}

alert(n + "! = " + ans(n));
document.write(n + "! = " + ans(n))
