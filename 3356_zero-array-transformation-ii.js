/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  let result = 0
  if (nums.reduce((a, b) => a + b, 0) === 0) {
    return result
  }
  for (const [from, to, val] of queries) {
    result++
    for (let i = from; i <= to; i++) {
      nums[i] -= val
      if (nums[i] < 0) {
        nums[i] = 0
      }
    }
    if (nums.reduce((a, b) => a + b, 0) === 0) {
      return result
    }
  }
  if (nums.reduce((a, b) => a + b, 0) === 0) {
    return result
  }
  return -1
}
