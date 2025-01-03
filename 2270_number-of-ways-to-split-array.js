/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let prefixSum = 0
  let totalSum = nums.reduce((acc, cur) => acc + cur, 0)
  let result = 0
  for (let i = 0; i < nums.length - 1; i++) {
    prefixSum = prefixSum + nums[i]
    totalSum = totalSum - nums[i]
    if (prefixSum >= totalSum) {
      result++
    }
  }
  return result
}

console.log(waysToSplitArray([10, 4, -8, 7]))
console.log(waysToSplitArray([2, 3, 1, 0]))
console.log(waysToSplitArray([6, -1, 9]))
