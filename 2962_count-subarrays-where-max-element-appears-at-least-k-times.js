/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const frequency = {}
  let start = 0
  let result = 0
  let maxVal = Math.max(...nums)
  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1
    while (frequency[maxVal] >= k) {
      result += nums.length - i
      frequency[nums[start]]--
      start++
    }
  }

  return result
}

var countSubarrays = function (nums, k) {
  let maxNumber = 0
  let left = 0
  let maxNumberCount = 0
  let result = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] > maxNumber) {
      maxNumber = nums[right]
      maxNumberCount = 0
      result = 0
      left = 0
    }
    if (maxNumber === nums[right]) maxNumberCount++
    while (maxNumberCount >= k) {
      result += nums.length - right
      if (nums[left] === maxNumber) maxNumberCount--
      left++
    }
  }
  return result
}

// console.log(countSubarrays([1, 3, 2, 3, 3], 2))
// console.log(countSubarrays([1, 4, 2, 1], 3))
