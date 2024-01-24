// https://leetcode.com/problems/game-of-life

/**
 * @param {number[][]} result
 * @return {void} Do not return anything, modify result in-place instead.
 */

var gameOfLife = function (board) {
  const rowLen = board.length - 1
  const result = [...board]
  for (let i = 0; i < result.length; i++) {
    result[i] = [...result[i]]
    const colLen = result[i].length - 1
    for (let j = 0; j < result[i].length; j++) {
      let countOnes = 0
      //  top
      if (i > 0) {
        countOnes += result[i - 1][j] === 1 ? 1 : 0
      }
      // left
      if (j > 0) {
        countOnes += result[i][j - 1] === 1 ? 1 : 0
      }
      // right
      if (j < colLen) {
        countOnes += result[i][j + 1] === 1 ? 1 : 0
      }
      // bottom
      if (i < rowLen) {
        countOnes += result[i + 1][j] === 1 ? 1 : 0
      }
      //top left diagonal
      if (i > 0) {
        countOnes += result[i - 1][j - 1] === 1 ? 1 : 0
      }
      //top right diagonal
      if (i > 0 && j < colLen) {
        countOnes += result[i - 1][j + 1] === 1 ? 1 : 0
      }
      //bottom left diagonal
      if (j > 0 && i < rowLen) {
        countOnes += result[i + 1][j - 1] === 1 ? 1 : 0
      }
      //bottom right diagonal
      if (i < rowLen && j < colLen) {
        countOnes += result[i + 1][j + 1] === 1 ? 1 : 0
      }

      if (result[i][j] === 1) {
        board[i][j] = countOnes === 2 || countOnes === 3 ? 1 : 0
      }
      if (result[i][j] === 0) {
        board[i][j] = countOnes === 3 ? 1 : 0
      }
    }
  }
  return board
}

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
)
console.log(
  gameOfLife([
    [1, 1],
    [1, 0],
  ])
)
