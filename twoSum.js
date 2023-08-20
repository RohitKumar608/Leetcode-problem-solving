// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (diff in map) return [i, map[diff]]
    map[nums[i]] = i
  }
}

var twoSum = function (nums, target) {
  const mapSet = {}
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const sum = nums[left] + nums[right]
    if (sum === target) {
      return [left, right]
    }
    if (mapSet[target - nums[left]] >= 0) {
      return [mapSet[target - nums[left]], left]
    } else if (mapSet[target - nums[right]] >= 0) {
      return [mapSet[target - nums[right]], right]
    }
    mapSet[nums[left]] = left
    mapSet[nums[right]] = right
    left++
    right--
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))

console.log(twoSum([-3, 4, 3, 90], 0))
