/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let maxSum = -1
  let sumMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let currSum = 0
    let num = nums[i]
    while (num > 0) {
      currSum += num % 10
      num = Math.floor(num / 10)
    }
    if (sumMap.has(currSum)) {
      maxSum = Math.max(maxSum, sumMap.get(currSum) + nums[i])
      sumMap.set(currSum, Math.max(sumMap.get(currSum), nums[i]))
    } else {
      sumMap.set(currSum, nums[i])
    }
  }
  return maxSum
}

console.log(maximumSum([18, 43, 36, 13, 7]))
