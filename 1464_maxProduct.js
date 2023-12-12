// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct1 = function (nums) {
  nums.sort((a, b) => b - a)
  return (nums[0] - 1) * (nums[1] - 1)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let firstMax = nums[0]
  let secondMax = nums[1]
  for (let i = 2; i < nums.length; i++) {
    if (firstMax < nums[i]) {
      if (firstMax > secondMax) {
        secondMax = firstMax
      }
      firstMax = nums[i]
    } else if (secondMax < nums[i]) {
      if (secondMax > firstMax) {
        firstMax = secondMax
      }
      secondMax = nums[i]
    }
  }
  return (secondMax - 1) * (firstMax - 1)
}

var maxProduct = function (nums) {
  let firstMax = nums[0]
  let secondMax = nums[1]
  for (let i = 2; i < nums.length; i++) {
    if (firstMax < nums[i]) {
      if (firstMax > secondMax) {
        secondMax = firstMax
      }
      firstMax = nums[i]
    } else if (secondMax < nums[i]) {
      if (secondMax > firstMax) {
        firstMax = secondMax
      }
      secondMax = nums[i]
    }
  }
  return (secondMax - 1) * (firstMax - 1)
}
console.log(maxProduct([3, 4, 5, 2]))
console.log(maxProduct([1, 5, 4, 5]))
