/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let result = -Infinity
  const maxValues = []
  for (let i = nums.length - 1; i >= 0; i--) {
    maxValues[i] = Math.max(nums[i], maxValues[i + 1] || 0)
  }
  for (let i = 0; i < maxValues.length; i++) {
    if (maxValues[i] == nums[i]) {
      result = Math.max(result, (nums[i + 1] || 0) - nums[i])
    } else {
      result = Math.max(result, maxValues[i] - nums[i])
    }
  }
  return result
}

console.log(maximumDifference([7, 1, 5, 4]))
console.log(maximumDifference([9, 4, 3, 2]))
console.log(maximumDifference([1, 5, 2, 10]))
