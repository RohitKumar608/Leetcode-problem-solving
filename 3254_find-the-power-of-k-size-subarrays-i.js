/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const len = k === 1 ? nums.length : nums.length - k + 1
  const result = new Array(len).fill(-1)

  for (let i = 0; i < len; i++) {
    if (k == 1) {
      result[i] = nums[i]
      continue
    }
    let hasIncreasingOrder = true
    for (let j = i + 1; j < i + k; j++) {
      hasIncreasingOrder &= nums[j] === nums[j - 1] + 1
    }
    if (hasIncreasingOrder) {
      result[i] = nums[i + k - 1]
    }
  }
  return result
}

// console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3))
