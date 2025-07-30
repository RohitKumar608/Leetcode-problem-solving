/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let maxVal = Math.max(...nums)
  let result = 0
  let tempMaxCount = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === maxVal) {
      tempMaxCount++
    } else {
      result = Math.max(result, tempMaxCount)
      tempMaxCount = 1
    }
  }
  return result
}
