/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const frequency = {}
  const result = []
  for (let i = 0; i < k - 1; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1
  }
  for (let i = k - 1; i < nums.length; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1
    const freqValues = Object.entries(frequency).sort((a, b) => {
      if (b[1] == a[1]) return b[0] - a[0]
      return b[1] - a[1]
    })
    let sum = 0
    for (let j = 0; j < Math.min(x, freqValues.length); j++) {
      sum += freqValues[j][0] * freqValues[j][1]
    }
    result[i - k + 1] = sum
    frequency[nums[i - k + 1]] -= 1
  }
  return result
}

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2))
