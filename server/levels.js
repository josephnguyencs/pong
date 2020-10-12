class Levels {
  constructor(game) {
    this.game = game
    this.level1 = [
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  }

  buildLevel(game, level) {
    let nets = []
    level.forEach((row, rowIndex) => {
      row.forEach((net, netIndex) => {
        if (net === 1) {
          let position = {
            x: 80 * netIndex,
            y: 75 + 24 * rowIndex
          }
          nets.push(new Net(game, position)) // eslint-disable-line
        }
      })
    })
    return nets
  }
}
