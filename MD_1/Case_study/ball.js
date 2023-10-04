
class Ball{
    radius;
    x_cor;
    y_cor;
    constructor(x, y, radius) {
        this.x_cor = x;
        this.y_cor = y;
        this.radius = radius;
    }
    createCircle(){
        let canvas = document.getElementById("main")
        let boi = canvas.getContext("2d");
        let getx = Math.random() * (canvas.width-100);
        let gety = Math.random() * (canvas.height-100);
        boi.beginPath();
        boi.clearRect(0,0,canvas.width,canvas.height);
        boi.arc(getx,gety,this.radius,0,2*Math.PI);
        boi.fill();
        boi.closePath();
    }
}
let ball = new Ball(200, 200, 35, 0 ,2 * Math.PI)
setInterval(function (){
    ball.createCircle()
},300);
// let _ez = document.getElementById('ez');
// let _UnEz = document.getElementById('UnEZ');
// _ez.addEventListener('click',)
// setInterval(function  (){
//     ball.createCircle()
// },);
//
// _UnEz.addEventListener('click',)
// setInterval(function UnEz (){
//     ball.createCircle()
// },300);



