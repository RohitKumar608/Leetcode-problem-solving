/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
  for (let i = 0; i <= nums.length - 2 * k; i++) {
    let isASCOrder = true
    for (let j = i + 1; j < i + k; j++) {
      isASCOrder &= nums[j - 1] < nums[j]
    }
    for (let j = i + k + 1; j < i + k + k; j++) {
      isASCOrder &= nums[j - 1] < nums[j]
    }
    if (isASCOrder) return true
  }
  return false
}
