class Net {
  constructor(game, position) {
    this.image = document.getElementById('img-net')
    this.game = game
    this.position = position
    this.width = 80
    this.height = 24
    this.markedForDeletion = false
  }

  update() {
    if (DetectCollision(this.game.ball, this)) { // eslint-disable-line
      this.game.ball.speed.y = -this.game.ball.speed.y
      this.markedForDeletion = true
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
}
