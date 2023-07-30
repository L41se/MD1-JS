let canvas = document.getElementById("main")
canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    alert(mousePos.x + ',' + mousePos.y);
}, false);
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
