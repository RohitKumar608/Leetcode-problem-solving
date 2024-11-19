/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let result = 0
  let sum = 0
  const map = new Map()
  for (let i = 0; i < k; i++) {
    sum += nums[i]
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  if (map.size === k) {
    result = sum
  }
  for (let i = k; i < nums.length; i++) {
    sum += nums[i]
    sum -= nums[i - k]
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)

    if (map.get(nums[i - k]) === 1) {
      map.delete(nums[i - k])
    } else {
      map.set(nums[i - k], map.get(nums[i - k]) - 1)
    }

    if (map.size === k) {
      result = Math.max(result, sum)
    }
  }
  return result
}

// console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))
// console.log(maximumSubarraySum([4, 4, 4], 3))
console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3))
