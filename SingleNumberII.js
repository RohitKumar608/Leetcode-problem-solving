// https://leetcode.com/problems/single-number-ii/description/
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber1 = function (nums) {
  const mapSet = {}
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    mapSet[nums[i]] = (mapSet[nums[i]] || 0) + 1
  }
  for (const key in mapSet) {
    if (mapSet[key] === 1) {
      return +key
    }
  }
  return result
}

var singleNumber = function (nums) {
  let ones = 0
  let twos = 0

  for (let num of nums) {
    ones = (ones ^ num) & ~twos
    twos = (twos ^ num) & ~ones
  }

  return ones
}
