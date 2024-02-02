/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let minVal = nums[0]
  let maxDiff = -Infinity
  for (let i = 1; i < nums.length; i++) {
    if (minVal > nums[i]) {
      minVal = nums[i]
    } else if (nums[i] > minVal) {
      maxDiff = Math.max(maxDiff, nums[i] - minVal)
    }
  }
  return maxDiff === -Infinity ? -1 : maxDiff
}

console.log(maximumDifference([7, 1, 5, 4]))
console.log(maximumDifference([9, 4, 3, 2]))
console.log(maximumDifference([1, 5, 2, 10]))
