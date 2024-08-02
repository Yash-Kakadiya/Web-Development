//Bubble sort

let arr = [1, 3, 2, 7, 6, 4, 5];

document.write("Given Array : " + arr);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

document.write("<br>Sorted Array : " + arr);