// 8. Write a JavaScript that handles following mouse events. Add necessary elements.If the mouse is over the heading should turn yellow and if the mouse goes out of the heading it should turn black.If ƒindtime button is clicked show time and date information.If button named “red” is clicked, background should change to red and If button named “green” is clicked, background should change to green.

let h1 = document.querySelector("#h1");
let time = document.querySelector("#time");
let timep = document.querySelector(".time");
let red = document.querySelector("#red");
let green = document.querySelector("#green");

h1.addEventListener('mouseover', () => {
    h1.style.color = "yellow";
});

h1.addEventListener('mouseout', () => {
    h1.style.color = "black";
});

time.addEventListener('click', () => {
    let d = new Date();
    console.log(d.getMonth());
    timep.innerHTML = "Date : " + d.getDate()+" / "+d.getMonth()+" / "+d.getFullYear() + "<br>Time : " + d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();
});

red.addEventListener('click',()=>{
    document.body.style.background="red";
})

green.addEventListener('click',()=>{
    document.body.style.background="green";
})