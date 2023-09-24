// https://leetcode.com/problems/single-number-iii/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const mapSet = {}

  let result = []
  for (let i = 0; i < nums.length; i++) {
    mapSet[nums[i]] = (mapSet[nums[i]] || 0) + 1
  }
  for (const key in mapSet) {
    if (mapSet[key] === 1) {
      result.push(+key)
    }
  }
  return result
}
