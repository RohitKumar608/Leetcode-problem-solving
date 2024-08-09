/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const result = []
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let steps = 1
  let i = 0
  let c = cStart
  let r = rStart
  while (result.length < rows * cols) {
    for (let j = 0; j < 2; j++) {
      const [dr, dc] = direction[i]
      for (let k = 0; k < steps; k++) {
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
          result.push([r, c])
        }
        r += dr
        c += dc
      }
      i = (i + 1) % 4
    }
    steps++
  }
  return result
}

console.log(spiralMatrixIII(5, 6, 1, 4))
