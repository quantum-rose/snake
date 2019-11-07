import Map from './map'
import Food from './food'
import Snake from './snake'

class Game {
  constructor(ctx) {
    this.map = new Map(ctx)
    this.food = new Food(this.map)
    this.snake = new Snake(this.map)
    this.banController = false // 是否禁止控制的标识
  }

  /**
   * 开始游戏
   */
  start() {
    let { map, food, snake } = this

    console.log(map), console.log(food), console.log(snake)

    // 初始化
    snake.render()
    food.render()
    map.render()

    // 边界
    let maxX = map.width - 1
    let maxY = map.height - 1

    // 定时器
    let timer = setInterval(() => {
      // 蛇以固定周期向前移动
      snake.move(map)

      // 蛇头的坐标
      let headX = snake.body[0].x
      let headY = snake.body[0].y

      // 吃掉食物，自身长度 +1
      if (headX == food.x && headY == food.y) {
        food.render()
        snake.growUp()
      }

      // GAME OVER：撞到边界 / 咬到自己
      if (
        headX < 0 ||
        headX > maxX ||
        headY < 0 ||
        headY > maxY ||
        map.mapArray[headY][headX] === 2
      ) {
        this.gameOver()
        return clearInterval(timer)
      }

      // 如果游戏未结束，渲染新的画面
      snake.render()
      map.render()
      this.banController = false
    }, 200)

    // 添加控制器
    this.initController()
  }

  /**
   * 移动方向的控制
   */
  initController() {
    let { snake } = this
    document.addEventListener('keydown', e => {
      if (this.banController) return
      this.banController = true
      switch (e.keyCode) {
        case 37:
          snake.direction !== 'right' && (snake.direction = 'left') // 禁止直接调头
          break
        case 38:
          snake.direction !== 'bottom' && (snake.direction = 'top')
          break
        case 39:
          snake.direction !== 'left' && (snake.direction = 'right')
          break
        case 40:
          snake.direction !== 'top' && (snake.direction = 'bottom')
          break
        default:
          return
      }
    })
  }

  /**
   * 游戏结束
   */
  gameOver() {
    console.log('GAME OVER')
  }
}

export default Game
