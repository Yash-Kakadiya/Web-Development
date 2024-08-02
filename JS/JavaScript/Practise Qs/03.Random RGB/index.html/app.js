let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h2 = document.querySelector("h2");
    let randomColor = getRandomColor();
    let div = document.querySelector("div");

    h2.innerText = randomColor;
    div.style.backgroundColor = randomColor;
    btn.style.backgroundColor = randomColor;

    console.log("color changed");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}