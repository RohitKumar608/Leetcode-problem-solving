// https://leetcode.com/problems/summary-ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let firstVal = nums[0]
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 != nums[i + 1]) {
      if (firstVal === nums[i]) {
        result.push(`${firstVal}`)
      } else {
        result.push(`${firstVal}->${nums[i]}`)
      }
      firstVal = nums[i + 1]
    }
  }
  return result
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
