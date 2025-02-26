/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxSum = 0
  let currSum = 0
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i])
    maxSum = Math.max(maxSum, currSum)
  }
  let minSum = 0
  currSum = 0
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.min(nums[i], currSum + nums[i])
    minSum = Math.min(minSum, currSum)
  }
  return Math.max(maxSum, Math.abs(minSum))
}

console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2]))
