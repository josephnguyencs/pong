const gameState = {
  paused: 0,
  running: 1,
  menu: 2,
  gameOver: 3
}

class Game {
  constructor(gameWidth, gameHeight, netsPerRow) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    this.gameState = gameState.running
    this.ball = new Ball(this) // eslint-disable-line
    this.paddle = new Paddle(this) // eslint-disable-line
    this.levels = new Levels(this) // eslint-disable-line
    let nets = this.levels.buildLevel(this, this.levels.level1)
    this.gameObjects = [this.ball, this.paddle, ...nets]
    new InputHandler(this.paddle, this) // eslint-disable-line
  }

  update(dt) {
    if (this.gameState === gameState.paused) return
    this.gameObjects.forEach(object => object.update(dt))
    this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx))
    if (this.gameState === gameState.paused) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      ctx.fill()
      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
    }
  }

  togglePause() {
    if (this.gameState === gameState.paused) {
      this.gameState = gameState.running
    } else {
      this.gameState = gameState.paused
    }
  }
}
