class Map {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height
    /**
     * 将地图抽象为二维数组，0：空地，1：食物，2：蛇
     */
    this.mapArray = new Array(canvas.height).fill().map(() => new Array(canvas.width).fill(0))
  }

  render() {
    let { mapArray, ctx } = this

    // 将 0 的部分渲染为地图
    mapArray.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 0) {
          let rgb = ((y + x) / 80) * 255
          ctx.fillStyle = `rgb(${rgb},${rgb},${rgb})`
          ctx.fillRect(x, y, 1, 1)
        }
      })
    })
  }
}

export default Map
