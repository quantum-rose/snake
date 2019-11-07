class Snake {
  constructor(map) {
    this.map = map
    this.width = 1
    this.height = 1
    this.direction = 'right'
    // 蛇的初始状态
    this.body = [
      {
        x: 3,
        y: 2,
        color: '#f00'
      },
      {
        x: 2,
        y: 2,
        color: '#00f'
      },
      {
        x: 1,
        y: 2,
        color: '#00f'
      }
    ]
  }

  render() {
    let { map, body, width, height } = this
    let { mapArray, ctx } = map

    // 将蛇渲染到地图上
    body.forEach(item => {
      mapArray[item.y][item.x] = 2
      ctx.fillStyle = item.color
      ctx.fillRect(item.x, item.y, width, height)
    })
  }

  /**
   * 移动
   */
  move() {
    let { map, body, direction } = this
    let head = body[0] // 蛇头
    let lastBody = body[body.length - 1] // 蛇尾

    // 蛇尾的最后一节重置为空地
    map.mapArray[lastBody.y][lastBody.x] = 0

    // 蛇的每一格身体移动到前一格的位置
    for (let i = body.length - 1; i > 0; i--) {
      body[i].x = body[i - 1].x
      body[i].y = body[i - 1].y
    }

    // 蛇头根据移动方向前进一格
    switch (direction) {
      case 'right':
        head.x += 1
        break
      case 'left':
        head.x -= 1
        break
      case 'bottom':
        head.y += 1
        break
      case 'top':
        head.y -= 1
        break
    }
  }

  /**
   * 成长：将身体最后一节复制并放到数组最后
   */
  growUp() {
    let { body } = this
    let lastBody = body[body.length - 1]
    let { x, y, color } = lastBody
    body.push({
      x,
      y,
      color
    })
  }
}

export default Snake
