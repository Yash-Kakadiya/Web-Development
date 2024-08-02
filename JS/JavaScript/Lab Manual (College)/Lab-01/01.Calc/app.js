//Simple calculator using popup box.

let a = parseInt(prompt("Enter first number"));
let s = prompt("Enter arithmetic sign");
let b = parseInt(prompt("Enter second number"));
let ans;

switch (s) {
    case "+":
        ans = a + b;
        break;
    case "-":
        ans = a - b;
        break;
    case "*":
        ans = a * b;
        break;
    case "/":
        ans = a / b;
        break;
    case "%":
        ans = a % b;
        break;
    case "**":
        ans = a ** b;
        break;
    default:
        alert("Invalid input");
}

alert(a + s + b + " = " + ans);
document.write(a + s + b + " = " + ans);