/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let result = 0
  let prefixSum = 0
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      prefixSum--
    } else {
      prefixSum++
    }
    if (prefixSum === 0) {
      result = Math.max(i + 1, result)
    } else if (map.has(prefixSum)) {
      result = Math.max(i - map.get(prefixSum), result)
    } else {
      map.set(prefixSum, i)
    }
  }
  return result
}
console.log(findMaxLength([0, 1, 0]))
console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0, 1]))

console.log(findMaxLength([1, 1, 1, 0, 1, 0, 0, 0, 1, 0]))
console.log(findMaxLength([0, 1, 1]))
