/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let maxFrequency = 0
  const frequency = {}
  let result = 0
  for (const val of nums) {
    frequency[val] = (frequency[val] || 0) + 1
    maxFrequency = Math.max(maxFrequency, frequency[val])
  }
  for (const key in frequency) {
    if (frequency[key] === maxFrequency) {
      result += maxFrequency
    }
  }
  return result
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]))
