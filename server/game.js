class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    this.ball = new Ball(this) // eslint-disable-line
    this.paddle = new Paddle(this) // eslint-disable-line
    this.levels = new Levels(this) // eslint-disable-line
    let nets = this.levels.buildLevel(this, this.levels.level1)
    this.gameObjects = [this.ball, this.paddle, ...nets]
    new InputHandler(this.paddle) // eslint-disable-line
  }

  update(dt) {
    this.gameObjects.forEach(object => object.update(dt))
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx))
  }
}
