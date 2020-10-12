class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    this.ball = new Ball(this) // eslint-disable-line
    this.paddle = new Paddle(this) // eslint-disable-line
    let nets = []
    for (let i=0; i<10; i++) {
      nets.push(new Net(this, {x:i*52, y:30})) // eslint-disable-line
    }
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
