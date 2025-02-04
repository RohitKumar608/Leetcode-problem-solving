/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let maxSum = nums[0]
  const len = nums.length
  let currSum = nums[0]
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      currSum += nums[i]
    } else {
      currSum = nums[i]
    }
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
}

// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]))
console.log(maxAscendingSum([10, 20, 30, 40, 50]))
