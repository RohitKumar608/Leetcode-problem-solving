/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let stack = []
  let result = 0
  for (let i = 0; i < height.length; i++) {
    if (stack.length && stack[0] <= height[i]) {
      const maxVal = stack.shift()
      while (stack.length) {
        const poppedVal = stack.pop()
        result += Math.max(0, maxVal - poppedVal)
      }
    }
    stack.push(height[i])
  }
  height = [...stack].reverse()
  stack = []
  for (let i = 0; i < height.length; i++) {
    if (stack.length && stack[0] <= height[i]) {
      const maxVal = stack.shift()
      while (stack.length) {
        const poppedVal = stack.pop()
        result += Math.max(0, maxVal - poppedVal)
      }
    }
    stack.push(height[i])
  }

  return result
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
