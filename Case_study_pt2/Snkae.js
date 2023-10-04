let blockSize = 17;
let rows = 30;
let cols = 30;
let board = document.getElementById("board");
let context = board.getContext("2d");
//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 15;
//speed
let velocityX = 0;
let velocityY = 0;
//snake body
let snakeBody = [];
//food
let foodX;
let foodY;
//score
let scorepoint = document.querySelector('#scorePoint')
//GG
let gameOver = false;
//start
window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    spawnFood();
    document.addEventListener("keydown", changeDirection);
    setInterval(update, 1000/13);
}
function update() {
    if (gameOver) {
        return;
    }
    //board info
    context.fillStyle="#FFFFE0";
    context.fillRect(0, 0, board.width, board.height);
    //food info
    context.fillStyle="#964B00";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    //eat fruit
    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        spawnFood();
        scorepoint += 1;
        document.getElementById("scorePoint").innerHTML = scorepoint;
    }
    //move body
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    //body info
    context.fillStyle="#0000FF";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    //hit the wall
    if (snakeX < 0 || snakeX > cols*blockSize-1 || snakeY < 0 || snakeY > rows*blockSize-1) {
        gameOver = true;
        alert("Game Over abc");
    }
    //bite itself
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}
//control
function changeDirection(e) {
    if (e.code === "ArrowUp" && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code === "ArrowDown" && velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code === "ArrowLeft" && velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code === "ArrowRight" && velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    }
}
//spawn new fruit
function spawnFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
