// 10. Write JavaScript that handles following mouse event.
// • If mouse left button pressed on browser, it displayed message “Left Clicked”.
// • If mouse right button pressed on browser, it displayed message “Right Clicked”.

document.addEventListener('mouseup', (e) => {
    if (e.button == 0) {
        console.log("left clicked");
    } else if (e.button == 1) {
        console.log("mouse wheel clicked");
    } else if (e.button == 2) {

        console.log("right clicked");
    }
});
