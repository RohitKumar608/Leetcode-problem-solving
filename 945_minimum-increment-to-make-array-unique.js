/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b)
  let result = 0
  let i = 1
  while (i < nums.length) {
    if (nums[i - 1] > nums[i]) {
      result += 1 + nums[i - 1] - nums[i]
      nums[i] += 1 + nums[i - 1] - nums[i]
    } else if (nums[i] === nums[i - 1]) {
      result++
      nums[i]++
    } else {
      i++
    }
  }
  return result
}

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]))
