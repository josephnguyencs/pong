class InputHandler {
  constructor(paddle, game) {
    this.paddle = paddle
    this.game = game
    this.keyDown = this.keyDown.bind(this)
    this.keyUp = this.keyUp.bind(this)
  }

  keyDown() {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37:
          this.paddle.moveLeft()
          break
        case 39:
          this.paddle.moveRight()
          break
        case 27:
          this.game.togglePause()
          break
        case 32:
          this.game.start()
          break
      }
    })
  }

  keyUp() {
    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          if (this.paddle.speed < 0) this.paddle.stop()
          break
        case 39:
          if (this.paddle.speed > 0) this.paddle.stop()
          break
      }
    })
  }
}
