/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const sumOfVal = []
  const MOD = 1000000007
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i]
    sumOfVal.push(sum)
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      sumOfVal.push(sum % MOD)
    }
  }
  sumOfVal.sort((a, b) => a - b)
  let result = 0
  for (let i = left - 1; i < right; i++) {
    result += sumOfVal[i]
  }
  return result
}

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5))
