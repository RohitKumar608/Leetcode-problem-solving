/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
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
  for (let i = 0; i <= nums.length; i++) {
    if (i + 1 !== nums[i]) {
      return i + 1
    }
  }
  return nums[0] + 1
}
