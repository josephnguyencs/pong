class InputHandler {
  constructor(paddle) {
    this.paddle = paddle
    document.addEventListener('keydown', (event) => {
      switch(event.keyCode) {
        case 37:
          this.paddle.moveLeft()
          break
        case 39:
          this.paddle.moveRight()
          break
      }
    })
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
