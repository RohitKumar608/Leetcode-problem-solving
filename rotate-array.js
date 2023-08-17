// https://leetcode.com/problems/rotate-array/description

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums, k) {
  k = k % nums.length
  const sliceArray = nums.splice(nums.length - k)
  return nums.splice(0, 0, ...sliceArray)
};

var rotate = function (nums, k) {
  const tempArr = [...nums]
  for (let i = 0; i < nums.length; i++) {
      nums[(i + k) % nums.length] = tempArr[i]
  }
  return nums
}
