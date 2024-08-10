/**
 * @param {number[][]} grid
 * @return {number}
 */

function isMagicSquare(matrix, sum = 15) {
  const visited = {}
  const sumOfRowColDia = { [sum]: 0 }
  for (let i = 0; i < 3; i++) {
    let rowSum = 0
    let colSum = 0
    for (let j = 0; j < 3; j++) {
      if (visited[matrix[i][j]] || matrix[i][j] < 1 || matrix[i][j] > 9) {
        return false
      }

      visited[matrix[i][j]] = true
      rowSum += matrix[i][j]
      colSum += matrix[j][i]
    }
    sumOfRowColDia[rowSum]++
    sumOfRowColDia[colSum]++
  }
  let leftDiagonalSum = 0
  let rightDiagonalSum = 0
  for (let i = 0; i < 3; i++) {
    leftDiagonalSum += matrix[i][i]
    rightDiagonalSum += matrix[2 - i][i]
  }
  sumOfRowColDia[leftDiagonalSum]++
  sumOfRowColDia[rightDiagonalSum]++
  return sumOfRowColDia[sum] === 8
}

var numMagicSquaresInside = function (grid) {
  const row = grid.length
  const col = grid[0].length
  let answer = 0
  if (row < 3 || col < 3) return 0
  for (let i = 0; i <= row - 3; i++) {
    const m = grid.slice(i, i + 3)
    for (let j = 0; j <= col - 3; j++) {
      if (isMagicSquare(m.map((o) => o.slice(j, j + 3)))) {
        answer++
      }
    }
  }

  return answer
}

console.log(
  numMagicSquaresInside([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ])
)
