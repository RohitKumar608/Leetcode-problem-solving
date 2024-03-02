// https://leetcode.com/problems/maximum-product-difference-between-two-pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let firstLargest = nums[0]
  let secondLargest = nums[1]
  let firstMinium = nums[0]
  let secondMinimum = nums[1]
  for (let i = 2; i < nums.length; i++) {
    if (firstMinium > nums[i]) {
      if (firstMinium < secondMinimum) {
        secondMinimum = firstMinium
      }
      firstMinium = nums[i]
    } else if (secondMinimum > nums[i]) {
      if (secondMinimum < firstMinium) {
        firstMinium = secondMinimum
      }
      secondMinimum = nums[i]
    }

    if (firstLargest < nums[i]) {
      if (firstLargest > secondLargest) {
        secondLargest = firstLargest
      }
      firstLargest = nums[i]
    } else if (secondLargest < nums[i]) {
      if (secondLargest > firstLargest) {
        firstLargest = secondLargest
      }
      secondLargest = nums[i]
    }
  }

  return firstLargest * secondLargest - firstMinium * secondMinimum
}
