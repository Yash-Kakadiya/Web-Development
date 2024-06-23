//Check Armstrong

let n = parseInt(prompt("Enter number to whether it is Armstrong or not"));
let t = n;
let t2 = n;
let l = 0;

while (n != 0) {
    n = Math.floor(n / 10);
    l++;
}

let sum = 0;

for (let i = 1; i <= l; i++) {
    r = t % 10;
    sum = sum + Math.pow(r, l);
    t = Math.floor(t / 10);
}

if (sum == t2) {
    alert(t2 + " is Armstrong number");
    document.write(t2 + " is Armstrong number");
} else {
    alert(t2 + " is not Armstrong number");
    document.write(t2 + " is not Armstrong number");
}