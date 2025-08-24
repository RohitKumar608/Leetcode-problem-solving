/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0
  let result = 0
  let countZero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) countZero++
    while (countZero > 1) {
      if (nums[left] === 0) countZero--
      left++
    }
    result = Math.max(result, i - left)
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0
  let result = 0
  let countZero = 0
  let zeroIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) countZero++
    if (countZero > 1) {
      left = zeroIdx + 1
      countZero = 1
    }
    if (nums[i] === 0) zeroIdx = i

    result = Math.max(result, i - left)
  }
  return result
}

console.log(longestSubarray([1, 1, 0, 1]))
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))
console.log(longestSubarray([1, 1, 1]))
