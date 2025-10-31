/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const result = []
  const map = {}
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1
    if (map[num] == 2) {
      result.push(num)
    }
  }
  return result
}
