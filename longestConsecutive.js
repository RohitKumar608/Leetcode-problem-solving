// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0
  let maxVal = 1
  let count = 1
  nums.sort((a, b) => a - b)
  for (let idx = 0; idx < nums.length - 1; idx++) {
    if (nums[idx] + 1 == nums[idx + 1]) {
      count++
      maxVal = Math.max(maxVal, count)
    } else if (nums[idx] == nums[idx + 1]) {
      continue
    } else {
      count = 1
    }
  }
  return maxVal
}

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 1]))
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([1, 2, 0, 1]))
