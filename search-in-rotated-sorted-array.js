// https://leetcode.com/problems/search-in-rotated-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target, idx = 0) {
  if (nums[0] === target) return 0

  if (nums.length === 1) {
    if (nums[0] == target) {
      return idx
    }
    return -1
  }
  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  if (nums[mid] === target) {
    return idx + mid
  }
  const greaterRightCond =
    target >= right[0] && target <= right[right.length - 1]
  if (
    (left[left.length - 1] < left[0] ||
      (target >= left[0] && target <= left[left.length - 1])) &&
    !greaterRightCond
  ) {
    return search(left, target, idx)
  } else if (right[right.length - 1] < right[0] || greaterRightCond) {
    return search(right, target, idx + mid)
  } else {
    return search(right, target, idx)
  }
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))

console.log(search([9, 1, 2, 3, 4, 5, 6, 7, 8], 5))
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 25))
