let canvas = document.getElementById("main")
canvas.addEventListener("click", function (evt) {
    let mousePos = getMousePos(canvas, evt);
    console.log(mousePos.x + ',' + mousePos.y);
}, false);

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
    };
}
