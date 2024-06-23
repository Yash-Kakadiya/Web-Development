//Find max in array

let arr = [1, 2, 3, 4, 5, 6, 7];

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
document.write("Array : " + arr);
document.write("<br> Max from Array : " + max);

//OR
// let max = Math.max(...arr);
// document.write("Max from Array : " + max);