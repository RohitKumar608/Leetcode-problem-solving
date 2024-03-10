/**
 * @param {character[][]} board
 * @return {number}
 */
var solve = function (board) {
  const rowBound = { 0: true, [board.length - 1]: true }
  const colBound = { 0: true, [board[0].length - 1]: true }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'O' && (rowBound[row] || colBound[col])) {
        console.log(row, col)
        dfs(row, col, board)
      }
    }
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'X'
      }
    }
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'T') {
        board[row][col] = 'O'
      }
    }
  }

  return board
}

const dfs = (row, col, board) => {
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] !== 'O'
  ) {
    return
  }

  board[row][col] = 'T'
  dfs(row - 1, col, board)
  dfs(row, col + 1, board)
  dfs(row + 1, col, board)
  dfs(row, col - 1, board)
}

// console.log(
//   solve([
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'X', 'X'],
//   ])
// )

console.log(
  solve([
    ['O', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'O'],
    ['X', 'O', 'X', 'O', 'X'],
    ['O', 'X', 'O', 'O', 'O'],
    ['X', 'X', 'O', 'X', 'O'],
  ])
)
