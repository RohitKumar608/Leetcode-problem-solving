/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const map = {}
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1
  }
  for (const key in map) {
    if (map[key] % 2 !== 0) {
      return false
    }
  }
  return true
}
