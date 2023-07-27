//https://leetcode.com/problems/contains-duplicate-ii

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0) {
      if (Math.abs(map[nums[i]] - i) <= k) {
        return true
      }
    }
    if (!map[nums[i]]) {
      map[nums[i]] = i
    }
  }
  return false
}

// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 4))
console.log(containsNearbyDuplicate([1], 1))
