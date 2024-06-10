/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let result = 0
  const sortedArr = [...heights].sort((a, b) => a - b)
  for (let i = 0; i < heights.length; i++) {
    if (sortedArr[i] !== heights[i]) result++
  }
  return result
}
