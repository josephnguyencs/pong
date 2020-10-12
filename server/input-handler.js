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
  }
}
