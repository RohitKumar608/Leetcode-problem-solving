/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let minVal = 1
  let maxVal = Math.max(...candies)
  let midVal = Math.floor((minVal + maxVal) / 2)
  let result = 0
  while (minVal > 0 && minVal <= maxVal) {
    let candyCount = 0
    for (const val of candies) {
      candyCount += Math.floor(val / midVal)
    }
    if (candyCount >= k) {
      result = Math.max(result, midVal)
    }
    if (candyCount < k) {
      maxVal = midVal - 1
    } else {
      minVal = midVal + 1
    }

    midVal = Math.floor((minVal + maxVal) / 2)
  }
  return result
}
