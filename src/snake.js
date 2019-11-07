import { intRandom } from './tools'

class Snake {
  constructor(map) {
    this.map = map
    this.width = 1
    this.height = 1

    // 随机的初始运动方向
    let directionArray = ['top', 'right', 'bottom', 'left']
    this.direction = directionArray[intRandom(0, 3)]

    // 随机的初始位置
    let x = intRandom(2, map.width - 3)
    let y = intRandom(2, map.height - 3)

    this.body = []
    for (let i = 0; i < 3; i++) {
      switch (this.direction) {
        case 'top':
          y += 1
          break
        case 'right':
          x -= 1
          break
        case 'bottom':
          y -= 1
          break
        case 'left':
          x += 1
          break
      }
      this.body.push({
        x,
        y,
        color: i
      })
    }
  }

  render() {
    let { map, body, width, height } = this
    let { mapArray, ctx } = map

    // 将蛇渲染到地图上
    body.forEach((item, index) => {
      mapArray[item.y][item.x] = 2
      ctx.fillStyle = `hsl(${item.color}, 100%, 50%)`
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
      color: color + 1
    })
  }
}

export default Snake
