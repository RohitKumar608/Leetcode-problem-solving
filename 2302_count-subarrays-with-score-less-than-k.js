/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let prefixSum = 0
  let left = 0
  let result = 0
  for (let right = 0; right < nums.length; right++) {
    prefixSum += nums[right]
    while (prefixSum * (right - left + 1) >= k) {
      prefixSum -= nums[left]
      left++
    }
    if (prefixSum * (left - right) < k) {
      result += right - left + 1
    }
  }
  return result
}

console.log(countSubarrays([2, 1, 4, 3, 5], 10))
console.log(countSubarrays([1, 1, 1], 5))
