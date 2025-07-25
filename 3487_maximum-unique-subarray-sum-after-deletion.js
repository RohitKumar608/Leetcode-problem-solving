/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const uniqueValues = [...new Set(nums)]
  const data = uniqueValues.filter((val) => val > 0)
  if (data.length === 0) {
    return Math.max(...uniqueValues)
  }
  return data.reduce((a, b) => a + b, 0)
}
