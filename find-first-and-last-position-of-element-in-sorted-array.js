// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = binaryFunc(nums, target)
  let end = binaryFunc(nums, target + 1) - 1

  if (start === nums.length || nums[start] !== target) {
    return [-1, -1]
  } else {
    return [start, end]
  }
}

function binaryFunc(nums, target) {
  let l = 0
  let r = nums.length
  while (l < r) {
    const mid = Math.floor((r + l) / 2)
    if (nums[mid] >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}

console.log(searchRange([0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4], 3))
