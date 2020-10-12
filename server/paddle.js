class Paddle {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.width = 150
    this.height = 30
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'green'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(dt) {
    if (!dt) return
    this.position.x += 5 / dt
  }
}
