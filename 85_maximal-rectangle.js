// https://leetcode.com/problems/maximal-rectangle
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let height = []
  let maxArea = 0
  for (let i = 0; i < matrix.length; i++) {
    if (i > 0) {
      height = matrix[i].map((num, idx) => {
        return num === '0' ? 0 : +num + height[idx]
      })
    } else {
      height = matrix[i].map((num) => +num)
    }
    const stack = []
    let start = 0
    for (let i = 0; i < height.length; i++) {
      const h = height[i]
      start = i
      while (stack.length && stack[stack.length - 1][1] > h) {
        const [idx, height] = stack.pop()
        maxArea = Math.max(maxArea, height * (i - idx))
        start = idx
      }
      stack.push([start, h])
    }
    for (const [i, h] of stack) {
      maxArea = Math.max(maxArea, h * (height.length - i))
    }
  }
  return maxArea
}

console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
)

console.log(maximalRectangle([['1', '1']]))
console.log(
  maximalRectangle([
    ['0', '0', '1'],
    ['1', '1', '1'],
  ])
)

console.log(
  maximalRectangle([
    ['0', '0', '1', '0'],
    ['0', '0', '1', '0'],
    ['0', '0', '1', '0'],
    ['0', '0', '1', '1'],
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['1', '1', '1', '1'],
  ])
)

console.log(
  maximalRectangle([
    ['1', '1', '0', '1'],
    ['1', '1', '0', '1'],
    ['1', '1', '1', '1'],
  ])
)

console.log(
  maximalRectangle([
    ['0', '1', '1', '0', '1'],
    ['1', '1', '0', '1', '0'],
    ['0', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1'],
    ['0', '0', '0', '0', '0'],
  ])
)
