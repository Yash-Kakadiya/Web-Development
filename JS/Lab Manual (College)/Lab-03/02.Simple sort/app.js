//Simple sort

let arr = [1, 2, 5, 6, 7, 3, 4];

document.write("Given Array : " + arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

document.write("<br> Sorted Array : " + arr);
