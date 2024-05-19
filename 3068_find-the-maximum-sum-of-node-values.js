/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  const delta = []
  let result = nums.reduce((a, b) => a + b, 0)
  for (let i = 0; i < nums.length; i++) {
    delta[i] = (nums[i] ^ k) - nums[i]
  }
  delta.sort((a, b) => b - a)
  for (let i = 0; i < nums.length; i = i + 2) {
    if (i == delta.length - 1) {
      break
    }
    const sum = delta[i] + delta[i + 1]
    if (sum <= 0) break
    result = result + sum
  }
  return result
}

console.log(
  maximumValueSum([1, 2, 1], 3, [
    [0, 1],
    [0, 2],
  ])
)

console.log(maximumValueSum([24, 78, 1, 97, 44], 6, []))
