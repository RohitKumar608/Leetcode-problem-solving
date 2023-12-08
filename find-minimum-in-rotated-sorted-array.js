// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)
  if (
    right[right.length - 1] < left[0] &&
    right[right.length - 1] < left[left.length - 1]
  ) {
    return findMin(right)
  } else {
    return findMin(left)
  }
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
