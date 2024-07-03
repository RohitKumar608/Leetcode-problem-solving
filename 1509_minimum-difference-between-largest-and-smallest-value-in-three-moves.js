/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) {
    return 0
  }
  nums.sort((a, b) => a - b)
  let result = Infinity
  for (let i = 0; i <= 3; i++) {
    const right = nums.length - 4 + i
    result = Math.min(result, nums[right] - nums[i])
  }

  return result
}

// console.log(minDifference([1, 5, 0, 10, 14]))
// console.log(minDifference([82, 81, 95, 75, 20]))
// console.log(minDifference([9, 48, 92, 48, 81, 31]))

// console.log(minDifference([6, 6, 0, 1, 1, 4, 6]))
console.log(minDifference([20, 66, 68, 57, 45, 18, 42, 34, 37, 58]))
