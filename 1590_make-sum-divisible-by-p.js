/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  const total = nums.reduce((a, b) => a + b, 0)
  const remainder = total % p
  if (remainder === 0) return 0
  let res = nums.length
  let currSum = 0
  const remainToIdx = { 0: -1 }
  for (let i = 0; i < nums.length; i++) {
    currSum = (currSum + nums[i]) % p
    const prefix = (currSum - remainder + p) % p
    if (remainToIdx[prefix] !== undefined) {
      const length = i - remainToIdx[prefix]
      res = Math.min(res, length)
    }
    remainToIdx[currSum] = i
  }
  if (res == nums.length) {
    return -1
  }
  return res
}
