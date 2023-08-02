// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const duplicateNumbers = []
  const numsMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (!numsMap[nums[i]]) {
      numsMap[nums[i]] = 1
    } else {
      duplicateNumbers.push(nums[i])
    }
  }
  return duplicateNumbers
}
