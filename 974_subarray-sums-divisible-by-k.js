/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraysDivByK1 = function (nums, k) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum % k == 0) {
        result++
      }
    }
  }

  return result
}

var subarraysDivByK = function (nums, k) {
  let result = 0
  let currSum = 0
  const prefixSum = { 0: 1 }
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i]
    const remainder = currSum % k < 0 ? (currSum % k) + k : currSum % k
    result += prefixSum[remainder] || 0
    prefixSum[remainder] = (prefixSum[remainder] || 0) + 1
  }

  return result
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
console.log(subarraysDivByK([-1, 2, 9], 2))
console.log(subarraysDivByK([2, -2, 2, -4], 6))
// console.log(subarraysDivByK1([2, -2, 2, -4], 6))
