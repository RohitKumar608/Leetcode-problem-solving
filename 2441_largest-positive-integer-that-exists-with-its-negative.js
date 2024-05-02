/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const map = {}
  let result = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && map[nums[i] * -1]) {
      result = Math.max(result, nums[i])
    } else if (nums[i] < 0 && map[nums[i] * -1]) {
      result = Math.max(result, nums[i] * -1)
    }
    map[nums[i]] = true
  }
  return result
}
