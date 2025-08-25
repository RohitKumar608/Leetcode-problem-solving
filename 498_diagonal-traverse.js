/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = []
  const runs = mat.length + mat[0].length
  let row = 0
  let col = 0
  let count = 0
  while (row + col <= runs) {
    const tempRes = []
    let tempRow = row
    let tempCol = col
    while (
      tempCol >= 0 &&
      tempRow >= 0 &&
      tempCol < mat[0].length &&
      tempRow < mat.length
    ) {
      if (count % 2 == 0) {
        tempRes.push(mat[tempRow][tempCol])
      } else {
        tempRes.unshift(mat[tempRow][tempCol])
      }
      tempCol += 1
      tempRow -= 1
    }
    if (row === mat.length - 1) {
      col++
    } else {
      row++
    }
    count++
    if (tempRes.length) result.push(...tempRes)
  }
  return result
}

console.log(
  findDiagonalOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
)
