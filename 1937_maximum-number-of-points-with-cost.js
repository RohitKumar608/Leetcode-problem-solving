/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let result = points[0]
  for (let r = 0; r < points.length - 1; r++) {
    const row = points[r + 1]
    const temRes = []
    for (let i = 0; i < result.length; i++) {
      let maxVal = -Infinity
      for (let j = 0; j < points[0].length; j++) {
        const addition = i == j ? 0 : Math.max(Math.abs(j - i), 1)
        maxVal = Math.max(maxVal, result[j] + row[i] - addition)
      }

      temRes[i] = maxVal
    }
    result = temRes
  }
  return Math.max(...result)
}

var maxPoints = function (points) {
  let pre = points[0]
  let cur = new Array(points[0].length)

  for (let row = 1; row < points.length; row++) {
    let maxAdd = 0
    for (let col = 0; col < points[row].length; col++) {
      maxAdd = Math.max(maxAdd - 1, pre[col])
      cur[col] = points[row][col] + maxAdd
    }
    for (let col = points[row].length - 1; col >= 0; col--) {
      maxAdd = Math.max(maxAdd - 1, pre[col])
      cur[col] = Math.max(cur[col], points[row][col] + maxAdd)
    }

    pre = cur
    cur = new Array(points[0].length)
  }

  return Math.max(...pre)
}

console.log(
  maxPoints([
    [5, 2, 1, 2],
    [2, 1, 5, 2],
    [5, 5, 5, 0],
  ])
)

// console.log(
//   maxPoints([
//     [1, 2, 3],
//     [1, 5, 1],
//     [3, 1, 1],
//   ])
// )
// console.log(
//   maxPoints([
//     [1, 5],
//     [2, 3],
//     [4, 2],
//   ])
// )

// console.log(
//   maxPoints([
//     [1, 5],
//     [3, 2],
//     [4, 2],
//   ])
// )
