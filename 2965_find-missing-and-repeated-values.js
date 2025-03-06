/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const map = new Map()
  const result = []
  for (let i = 0; i < grid.length; i++) {
    for (const val of grid[i]) {
      const frequency = (map.get(val) || 0) + 1
      map.set(val, frequency)
      if (frequency > 1) {
        result.push(val)
      }
    }
  }
  for (let i = 1; i <= grid[0].length * grid.length; i++) {
    if (!map.has(i)) {
      result.push(i)
    }
  }
  return result
}

var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length
  const count = Array(n * n + 1).fill(0)
  let repeated = 0
  let missing = 0
  for (const row of grid) {
    for (const num of row) {
      count[num]++
      if (count[num] === 2) {
        repeated = num
      }
    }
  }

  for (let i = 1; i <= n * n; ++i) {
    if (count[i] === 0) {
      missing = i
      break
    }
  }

  return [repeated, missing]
}
