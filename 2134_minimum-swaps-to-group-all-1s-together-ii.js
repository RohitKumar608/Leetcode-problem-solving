/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  let windowSize = 0
  let result = Infinity
  for (const num of nums) {
    windowSize += num
  }
  let onesCount = 0
  nums = nums.concat(nums)

  for (let i = 0; i < nums.length; i++) {
    if (i >= windowSize) {
      onesCount -= nums[i - windowSize]
      onesCount += nums[i]
      result = Math.min(result, windowSize - onesCount)
    } else {
      onesCount += nums[i]
    }
  }
  return result
}

console.log(minSwaps([0, 1, 0, 1, 1, 0, 0]))
console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]))
console.log(minSwaps([1, 1, 0, 0, 1]))
