//Check Palindrome

let n = parseInt(prompt("Enter number to whether it is palindrome or not"));
let rev = 0;
let temp = n;
// console.log(typeof n);
while (n != 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);  //because n/10=>float value
    console.log(rev);
}

if (temp == rev) {
    alert(temp + " is palindrome number");
    document.write(temp + " is palindrome number");
} else {
    alert(temp + " is not palindrome number");
    document.write(temp + " is not palindrome number");
}