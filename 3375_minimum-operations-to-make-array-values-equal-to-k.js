/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const map = new Map()
  let hasSameVal = true
  for (const num of nums) {
    if (num < k) {
      return -1
    }
    if (num > k) {
      map.set(num, num)
    }
  }
  return map.size
}
