const gameState = {
  paused: 0,
  running: 1,
  menu: 2,
  gameOver: 3,
  newLevel: 4,
  finish: 5
}

class Game {
  constructor(gameWidth, gameHeight) {
    this.start = this.start.bind(this)
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.gameState = gameState.menu
    this.ball = new Ball(this) // eslint-disable-line
    this.paddle = new Paddle(this) // eslint-disable-line
    this.gameObjects = []
    this.nets = []
    this.lives = 3
    this.newLevels = null
    this.currentLevel = 0
    const input = new InputHandler(this.paddle, this) // eslint-disable-line
    input.keyDown()
    input.keyUp()
  }

  start() {
    if (this.gameState !== gameState.menu && this.gameState !== gameState.newLevel) return
    this.levels = new Levels(this) // eslint-disable-line
    this.newLevels = [this.levels.level1, this.levels.level2, this.levels.level3]
    this.nets = this.levels.buildLevel(this, this.newLevels[this.currentLevel])
    this.ball.reset()
    this.gameObjects = [this.ball, this.paddle]
    this.gameState = gameState.running
  }

  update(dt) {
    if (this.lives === 0) this.gameState = gameState.gameOver
    if (this.gameState === gameState.paused || this.gameState === gameState.menu || this.gameState === gameState.gameOver) return
    if (this.nets.length === 0) {
      this.currentLevel++
      if (this.newLevels[this.currentLevel] === undefined) {
        this.gameState = gameState.finish
        return
      }
      this.gameState = gameState.newLevel
      this.start()
    }
    [...this.gameObjects, ...this.nets].forEach(object => object.update(dt))
    this.nets = this.nets.filter(net => !net.markedForDeletion)
  }

  draw(ctx) {
    [...this.gameObjects, ...this.nets].forEach(object => object.draw(ctx))
    if (this.gameState === gameState.paused) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      ctx.fill()
      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gameState === gameState.menu) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fill()
      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("Press SPACEBAR to Start", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gameState === gameState.gameOver) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fill()
      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gameState === gameState.finish) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fill()
      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("YOU WIN", this.gameWidth / 2, this.gameHeight / 2)
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
