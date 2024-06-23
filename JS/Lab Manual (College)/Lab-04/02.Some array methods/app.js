//Some array methods

let fruits = ["Mango", "Apple", "Papaya"];
let num = [1, 2, 3];

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

console.log(fruits.concat(num)); //doesn't change the original array
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

console.log(fruits.sort());  //properly sort Strings, but not numbers
