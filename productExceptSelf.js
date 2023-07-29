// https://leetcode.com/problems/product-of-array-except-self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = []
  const prefix = [1]
  const postFix = []
  postFix[nums.length] = 1
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[prefix.length - 1] * nums[i]
    postFix[nums.length - 1 - i] =
      postFix[nums.length - i] * nums[nums.length - 1 - i]
  }
  for (let idx = 1; idx <= nums.length; idx++) {
    result[idx - 1] =
      prefix[idx - 1] * postFix[idx] === -0 ? 0 : prefix[idx - 1] * postFix[idx]
  }
  return result
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
