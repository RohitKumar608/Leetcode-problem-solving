/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const frequency = {}
  let result = 0
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1
    while (frequency[nums[i]] > k) {
      frequency[nums[left]]--
      left++
    }
    result = Math.max(result, i - left + 1)
  }
  return result
}

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2))
console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1))
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4))
