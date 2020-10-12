class Ball {
  constructor() {
    this.image = document.getElementById('img-ball')
  }

  draw(ctx) {
    ctx.drawImage(this.image, 10, 10, 16, 16)
  }

  update() {

  }
}
