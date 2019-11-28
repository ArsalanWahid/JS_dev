const cvs = document.getElementById('myCanvas')
const ctx = cvs.getContext('2d')

let box  = 32 //px
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box};

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
}


function draw() {
  let ground = new Image()
  let food = new Image();
  food.src = './img/food.png';
  ground.src = './img/ground.png';
  ctx.drawImage(ground,0,0);
  
  for(let i = 0 ; i < snake.length; i++) {
    ctx.fillStyle = (i == 0) ? "green":"white";
    ctx.fillRect(snake[i].x,snake[i].y,box,box);
    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x,snake[i].y,box,box);
  }
  ctx.drawImage(food,food.x,food.y);
}

let game = setInterval(draw,100)