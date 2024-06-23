//First digit X second digits times

let n = parseInt(prompt("Enter two digit number"));

if (n < 10 || n > 99) {
    alert("Enter a two-digit number!");
    document.write("Enter a two-digit number!");
} else {
    let x = Math.floor(n / 10);
    let y = n % 10;
    let ans = 1;

    for (let i = 0; i < y; i++) {
        ans = ans * x;
        console.log(ans);
    }
    console.log(ans);
    document.write("Number : " + n + "<br>");
    document.write("=> " + x + "^" + y + " = "+ans+"<br>");
}