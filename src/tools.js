/**
 * 生成一个介于 start 和 end 之间的整数，闭区间
 */
const intRandom = function(start, end) {
  if (Object.prototype.toString.call(start) !== '[object Number]')
    throw new TypeError(`${start} is not a number`)
  if (Object.prototype.toString.call(end) !== '[object Number]')
    throw new TypeError(`${end} is not a number`)
  start = Math.floor(start)
  end = Math.floor(end) + 1
  return Math.floor(Math.random() * (end - start) + start)
}

export { intRandom }
