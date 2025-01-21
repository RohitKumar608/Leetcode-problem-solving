/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  function isPainted(mat) {
    let hasOneRowPainted = false
    let hasOneColumnPainted = false
    for (let i = 0; i < mat.length; i++) {
      const sum = mat[i].reduce((acc, curr) => acc + curr, 0)
      hasOneRowPainted ||= sum === 0
    }
    for (let i = 0; i < mat[0].length; i++) {
      const sum = mat.reduce((acc, curr) => acc + curr[i], 0)
      hasOneColumnPainted ||= sum === 0
    }
    return hasOneRowPainted || hasOneColumnPainted
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      for (let k = 0; k < mat[0].length; k++) {
        if (mat[j][k] === arr[i]) {
          mat[j][k] = 0
        }
      }
    }
    if (isPainted(mat)) return i
  }
}

var firstCompleteIndex = function (arr, mat) {
  const rows = mat.length,
    cols = mat[0].length
  const positionMap = new Map()
  const rowCount = Array(rows).fill(cols)
  const colCount = Array(cols).fill(rows)

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      positionMap.set(mat[r][c], [r, c])
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const [r, c] = positionMap.get(arr[i])
    rowCount[r]--
    colCount[c]--
    if (rowCount[r] === 0 || colCount[c] === 0) return i
  }
}

console.log(
  firstCompleteIndex(
    [8, 2, 4, 9, 3, 5, 7, 10, 1, 6],
    [
      [8, 2, 9, 10, 4],
      [1, 7, 6, 3, 5],
    ]
  )
)
