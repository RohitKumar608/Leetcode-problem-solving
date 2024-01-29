// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let i = 0
  while (i < nums.length) {
    const correctIdx = nums[i] - 1
    if (
      nums[i] > 0 &&
      correctIdx < nums.length &&
      i + 1 !== nums[i] &&
      nums[correctIdx] !== nums[i]
    ) {
      const temp = nums[i]
      nums[i] = nums[correctIdx]
      nums[correctIdx] = temp
    } else {
      i++
    }
  }
  return nums[nums.length - 1]
}
