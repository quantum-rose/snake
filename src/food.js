import { intRandom } from './tools'

class Food {
  constructor(map) {
    this.map = map
    this.width = 1
    this.height = 1
    this.color = '#0f0'
    this.x = 0
    this.y = 0
  }

  render() {
    let { map, x, y, color, width: foodWidth, height: foodHeight } = this
    let { ctx, mapArray, width: mapWidth, height: mapHeight } = map

    // 销毁上一个食物
    mapArray[y][x] = 0

    // 随机生成一个新的食物，只能生成在 0：空地上
    do {
      x = this.x = intRandom(0, mapWidth - 1)
      y = this.y = intRandom(0, mapHeight - 1)
    } while (mapArray[y][x] !== 0)

    mapArray[y][x] = 1
    ctx.fillStyle = color
    ctx.fillRect(x, y, foodWidth, foodHeight)
  }
}

export default Food
