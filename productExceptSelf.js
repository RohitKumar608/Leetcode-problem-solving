// https://leetcode.com/problems/product-of-array-except-self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums.reduce((prev, curr, currentIndex) => {
      if (currentIndex === i) return prev
      return prev * curr
    }, 1)
  }
  return result
}

// console.log(productExceptSelf([1, 2, 3, 4]))
