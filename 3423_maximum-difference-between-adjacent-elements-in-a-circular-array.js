/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result = Math.max(result, Math.abs(nums[i] - nums[(i + 1) % nums.length]))
  }
  return result
}
