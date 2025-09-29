/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  this.sums = {}
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      this.sums[grid[i][j]] = {
        adjacentSum:
          (grid[i - 1]?.[j] || 0) +
          (grid[i]?.[j + 1] || 0) +
          (grid[i]?.[j - 1] || 0) +
          (grid[i + 1]?.[j] || 0),
        diagonalSum:
          (grid[i - 1]?.[j - 1] || 0) +
          (grid[i + 1]?.[j + 1] || 0) +
          (grid[i + 1]?.[j - 1] || 0) +
          (grid[i - 1]?.[j + 1] || 0),
      }
    }
  }
}

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  return this.sums[value].adjacentSum
}

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  return this.sums[value].diagonalSum
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
