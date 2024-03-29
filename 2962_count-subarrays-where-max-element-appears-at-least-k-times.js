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

// console.log(countSubarrays([1, 3, 2, 3, 3], 2))
// console.log(countSubarrays([1, 4, 2, 1], 3))
console.log(
  countSubarrays(
    [
      61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58,
      42, 82, 10, 82, 78, 15, 82,
    ],
    2
  )
)

console.log(
  countSubarrays(
    [
      37, 20, 38, 66, 34, 38, 9, 41, 1, 14, 25, 63, 8, 12, 66, 66, 60, 12, 35,
      27, 16, 38, 12, 66, 38, 36, 59, 54, 66, 54, 66, 48, 59, 66, 34, 11, 50,
      66, 42, 51, 53, 66, 31, 24, 66, 44, 66, 1, 66, 66, 29, 54,
    ],
    5
  )
)
