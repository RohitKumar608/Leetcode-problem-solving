/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  const maxFrequency = { key: null, value: 0 }
  const frequency = {}
  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1
    if (frequency[num] > maxFrequency.value) {
      maxFrequency.key = num
      maxFrequency.value = frequency[num]
    }
  }

  let leftCountMaxFrequency = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxFrequency.key) {
      leftCountMaxFrequency++
    }
    if (
      leftCountMaxFrequency > (i + 1) / 2 &&
      maxFrequency.value - leftCountMaxFrequency > (nums.length - i - 1) / 2
    ) {
      return i
    }
  }
  return -1
}
