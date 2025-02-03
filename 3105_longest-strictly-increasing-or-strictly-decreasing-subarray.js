/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let max = 1
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++
      max = Math.max(max, count)
    } else {
      count = 1
    }
  }
  count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++
      max = Math.max(max, count)
    } else {
      count = 1
    }
  }
  return max
}

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]))
console.log(longestMonotonicSubarray([6, 6, 3]))
