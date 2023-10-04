let canva = document.getElementById("canvas");
let ctx = canva.getContext("2d");
document.addEventListener("keydown",onkeydown);
window.onload = function (){
    canva;
    ctx;
    var x = 8;
    setInterval(draw, 1000/x);
}
function keyDownEvent(e) {
    switch (e.keyCode) {
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
}
