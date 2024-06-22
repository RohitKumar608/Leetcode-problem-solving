/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let sum = 0
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] % 2 === 0 ? 0 : 1
  }
  const prefix = { 0: 1 }

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (prefix[sum - k]) {
      result += prefix[sum - k]
    }
    prefix[sum] = (prefix[sum] || 0) + 1
  }
  return result
}

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2))
console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3))
