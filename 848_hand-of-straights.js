/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isNStraightHand = function (nums, k) {
  nums.sort((a, b) => a - b)
  if (nums.length % k !== 0) return false
  const frequency = new Map()
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1)
  }
  while (frequency.size) {
    let group = k
    let previousNumber = ''
    if (frequency.size < k) {
      return false
    }
    for (const [key, val] of frequency) {
      if (previousNumber === '') {
        previousNumber = +key
      } else if (previousNumber + 1 !== +key || +key === previousNumber) {
        return false
      } else {
        previousNumber = +key
      }
      const count = frequency.get(key) - 1
      frequency.set(key, count)
      if (count === 0) {
        frequency.delete(key)
      }
      group--
      if (group === 0) {
        break
      }
    }
  }
  return true
}
