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

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxFrequencyElements = function (nums) {
  let map = new Map()
  let maxFrequency = 0
  let ans = 0
  for (let num of nums) {
    const freq = (map.get(num) || 0) + 1
    map.set(num, freq)
    maxFrequency = Math.max(maxFrequency, freq)
  }

  for (let [k, v] of map.entries()) {
    if (v === maxFrequency) {
      ans += v
    }
  }
  return ans
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]))
