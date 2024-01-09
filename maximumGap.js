// https://leetcode.com/problems/maximum-gap/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length === 1) return 0
  const mapSet = {}
  let maxDiff = 0
  let previousVal = null
  for (let i = 0; i < nums.length; i++) {
    mapSet[nums[i]] = nums[i]
  }
  for (const key in mapSet) {
    if (previousVal !== null) {
      maxDiff = Math.max(maxDiff, mapSet[key] - previousVal)
    }
    previousVal = mapSet[key]
  }

  return maxDiff
}
