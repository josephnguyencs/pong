let canvas = document.getElementById("game-screen")
let ctx = canvas.getContext('2d')

const gameWidth = 800
const gameHeight = 600

ctx.clearRect(0, 0, 800, 600)
let paddle = new Paddle(gameWidth, gameHeight) // eslint-disable-line
let ball = new Ball(gameWidth, gameHeight) // eslint-disable-line
new InputHandler(paddle) // eslint-disable-line
paddle.draw(ctx)

let lastTime = 0

function gameLoop(timeStamp) {
  ctx.clearRect(0, 0, gameWidth, gameHeight)
  let dt = timeStamp - lastTime
  lastTime = timeStamp
  paddle.update(dt)
  paddle.draw(ctx)
  ball.update(dt)
  ball.draw(ctx)
  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
