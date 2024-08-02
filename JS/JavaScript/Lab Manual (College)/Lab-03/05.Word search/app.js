//Word search

let str = prompt("Enter string");
let word = prompt("Enter word to search");

document.write("Given string : " + str);
document.write("<br> Word to search : " + word);

str = str.toLowerCase().trim();
word = word.toLowerCase().trim();

let wrdArr = str.split(" ");
let idx;

for (let i = 0; i < wrdArr.length; i++) {
    if (wrdArr[i] == word) {
        idx = i;
        break;
    } else {
        idx = -1;
    }
}

if (idx != -1) {
    document.write("<br> Word found at index : " + idx);
} else {
    document.write("<br> Word not found!");
}