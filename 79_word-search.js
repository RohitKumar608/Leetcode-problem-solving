/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length
  const col = board[0].length
  const path = new Set()
  function dfs(r, c, wordIdx) {
    if (wordIdx === word.length) {
      return true
    }
    if (
      r < 0 ||
      c < 0 ||
      r >= row ||
      c >= col ||
      path.has(`${r},${c}`) ||
      word[wordIdx] !== board[r][c]
    ) {
      return false
    }
    path.add(`${r},${c}`)
    const res =
      dfs(r, c + 1, wordIdx + 1) ||
      dfs(r, c - 1, wordIdx + 1) ||
      dfs(r + 1, c, wordIdx + 1) ||
      dfs(r - 1, c, wordIdx + 1)
    path.delete(`${r},${c}`)
    return res
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const result = dfs(i, j, 0)
      console.log(i, j)
      if (result) return true
    }
  }
  return false
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
)
