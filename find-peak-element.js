// https://leetcode.com/problems/find-peak-element

/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function (nums) {
  let result = 0
  function split(nums, idx = 0) {
    if (nums.length === 1) return
    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)

    if (
      nums[mid] > nums[mid - 1] &&
      (nums[mid] > nums[mid + 1] || nums[mid + 1] === undefined)
    ) {
      result = idx + mid
      return
    }
    if (nums[mid] < nums[mid - 1]) {
      split(left, idx)
    } else {
      split(right, mid + idx)
    }
  }
  split(nums)
  return result
}
