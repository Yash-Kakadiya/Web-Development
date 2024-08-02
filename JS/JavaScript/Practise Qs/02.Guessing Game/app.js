//Guessing Game

const max = prompt("Enter the maximum number:");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number");

while (true) {
    if (guess == random) {
        console.log("You guessed it right");
        break;
    } else if (guess == "quit") {
        console.log("quitting... game");
        break;
    } else if (guess > random) {
        guess = prompt("try lower number");
    } else {
        guess = prompt("try bigger number");
    }
}