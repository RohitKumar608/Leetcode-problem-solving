// https://leetcode.com/problems/number-of-good-pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let map = {}
  let pairs = 0

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      pairs += map[nums[i]]
      map[nums[i]] += 1
    } else {
      map[nums[i]] = 1
    }
  }

  return pairs
}
