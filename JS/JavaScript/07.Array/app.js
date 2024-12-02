//Array (Data Structure)

let info = ["Yash", 9.3, "Rajkot"];
let friends = ["Ronit", "¥@$#", "Mihir"];

console.log(friends);
console.log(friends[1]);

console.log("Type of Array: " + (typeof friends));
console.log("Type of element Array: " + (typeof friends[1]));

//Arrays are mutable

let fruits = ["Mango", "Apple", "Papaya"];

console.log(fruits);

fruits[0] = "Banana";

console.log(fruits);

//Arrays Methods

console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.pop());
console.log(fruits);

fruits.push("Orange");
console.log(fruits);

fruits.unshift("Chikoo");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

console.log(fruits.indexOf("Chikoo"));
console.log(fruits.includes("Apple"));

console.log(fruits.concat(friends)); //doesn't change the original array
console.log(fruits);

fruits.reverse();
console.log(fruits);

console.log(fruits.slice());  //doesn't change the original array
console.log(fruits.slice(1));  //doesn't change the original array
console.log(fruits.slice(1, 2));  //doesn't change the original array
console.log(fruits.slice(-2));  //doesn't change the original array

// format :fruits.splice(start, deleteCount, "item1", ..., "itemN");

console.log(fruits);
fruits.splice(1, 0, "Mango", "Chikoo");
console.log(fruits);

console.log(fruits.sort());  //properly sort Strings but not numbers

//Array References(address)

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 == arr2);
console.log(arr1 == arr3);

//Constant Array

const num = [1, 2, 3, 4];  //value can be change but address is constant

num[0] = 7;
console.log(num);

//Multidimensional Array

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr);
