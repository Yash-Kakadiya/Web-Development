//Print factors

let n = parseInt(prompt("Enter number to whether it is Armstrong or not"));

for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
        document.write(i + "<br>");
    }
}