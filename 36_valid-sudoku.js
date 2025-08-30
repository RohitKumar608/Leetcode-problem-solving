/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set()
    const colSet = new Set()
    const boardSet = new Set()

    for (let j = 0; j < 9; j++) {
      const rowBox = board[i][j]
      const colBox = board[j][i]
      const boxBoard =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

      if (rowBox !== '.') {
        if (rowSet.has(rowBox)) return false
        rowSet.add(rowBox)
      }

      if (colBox !== '.') {
        if (colSet.has(colBox)) return false
        colSet.add(colBox)
      }

      if (boxBoard !== '.') {
        if (boardSet.has(boxBoard)) return false
        boardSet.add(boxBoard)
      }
    }
  }
  return true
}
