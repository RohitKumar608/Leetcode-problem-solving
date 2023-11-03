// https://leetcode.com/problems/valid-sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  // check for row/column
  for (let i = 0; i < 9; i++) {
    let mapSetRow = {}
    let mapSetCol = {}
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.' && mapSetRow[board[i][j]]) {
        return false
      }
      if (board[j][i] !== '.' && mapSetCol[board[j][i]]) {
        return false
      }
      mapSetRow[board[i][j]] = board[i][j]
      mapSetCol[board[j][i]] = board[j][i]
    }
  }

  for (let i = 0; i < 9; i = i + 3) {
    for (let j = 0; j < 9; j = j + 3) {
      let mapSet = {}
      // check for square
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (board[k + i][j + l] !== '.') {
            if (!mapSet[board[k + i][j + l]]) {
              mapSet[board[k + i][j + l]] = board[k + i][j + l]
            } else {
              return false
            }
          }
        }
      }
    }
  }
  return true
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],

    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],

    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
)
console.log(
  isValidSudoku([
    ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '9', '.'],

    ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
    ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
    ['.', '.', '.', '7', '.', '.', '.', '.', '.'],

    ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ])
)
