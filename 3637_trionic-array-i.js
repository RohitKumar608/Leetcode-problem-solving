/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
  if (nums.length <= 3) return false
  let idx = 0
  let hasCome = false
  while (idx < nums.length) {
    if (nums[idx + 1] > nums[idx]) {
      idx++
      hasCome = true
      continue
    }
    break
  }
  if (!hasCome) return false
  hasCome = false
  while (idx < nums.length) {
    if (nums[idx] > nums[idx + 1]) {
      idx++
      hasCome = true
      continue
    }
    break
  }
  if (!hasCome) return false
  hasCome = false
  while (idx < nums.length) {
    if (nums[idx + 1] > nums[idx]) {
      idx++
      hasCome = true
      continue
    }
    break
  }
  if (!hasCome) return false

  return idx + 1 == nums.length
}

console.log(isTrionic([1, 3, 5, 4, 2, 6]))
