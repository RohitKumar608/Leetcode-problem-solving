/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let minVal = arrays[0][0]
  let maxVal = arrays[0][arrays[0].length - 1]
  let result = -Infinity
  for (let i = 1; i < arrays.length; i++) {
    const data = arrays[i]
    result = Math.max(
      result,
      Math.abs(minVal - data[data.length - 1]),
      Math.abs(maxVal - data[0])
    )
    minVal = Math.min(minVal, data[0])
    maxVal = Math.max(maxVal, data[data.length - 1])
  }
  return result
}

console.log(
  maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ])
)
