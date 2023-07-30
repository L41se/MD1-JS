
class Ball{
    radius;
    x_cor;
    y_cor;
    constructor(x, y, radius) {
        this.x_cor = x;
        this.y_cor = y;
        this.radius = radius;
    }
    getx(){
        return this.x_cor;
    }
    gety(){
        return this.y_cor;
    }
    getradius(){
        return this.radius;
        }
    createCircle(){
        let canvas = document.getElementById("main")
        let boi = canvas.getContext("2d");
        let getx = Math.random() * (canvas.width-this.radius);
        let gety = Math.random() * (canvas.height-this.radius);
        boi.beginPath();
        boi.clearRect(0,0,canvas.width,canvas.height);
        boi.arc(getx,gety,this.radius,0,2*Math.PI);
        boi.fill();
        boi.closePath();
    }
}
let ball = new Ball(200,200,35)
setInterval(function (){
    ball.createCircle()
},100);
console.log(ball)



