/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const array = new Array(numRows)
    .fill([])
    .map(() => new Array(numRows).fill(0))

  array[0][0] = 1
  for (let i = 1; i < numRows; i++) {
    for (let j = 0; j < numRows; j++) {
      array[i][j] = (array[i - 1][j - 1] || 0) + (array[i - 1][j] || 0)
    }
    array[i - 1] = array[i - 1].filter((val) => val > 0)
  }
  return array
}

console.log(generate(5))
