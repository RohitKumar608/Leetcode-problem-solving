/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  const map = new Map()
  const set = new Set(nums)
  if (set.size == 1) {
    if (value === 1) return nums.length
    if (Math.abs(nums[0]) > 1) {
      return 0
    }
    return 1
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      let num = 0
      if (value > Math.abs(nums[i])) {
        num = nums[i] + value
      } else {
        num = nums[i] + Math.ceil(Math.abs(nums[i]) / value) * value
      }

      while (map.has(num) && num <= nums.length) {
        num += value
      }
      nums[i] = num
      map.set(nums[i], true)
    } else if (
      nums[i] >= nums.length - 1 ||
      map.has(nums[i]) ||
      nums[i] === value
    ) {
      let num = nums[i] % value
      while (map.has(num) && num <= nums.length) {
        num += value
      }
      nums[i] = num
      map.set(nums[i], true)
    }
    if (nums[i] >= 0) map.set(nums[i], true)
  }

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(i)) {
      return i
    }
  }
  return nums.length
}

// console.log(findSmallestInteger([1, -10, 7, 13, 6, 8], 5))
// console.log(findSmallestInteger([1, -10, 7, 13, 6, 8], 7))
// console.log(findSmallestInteger([1, 3, 5, 7], 2))
// console.log(findSmallestInteger([3, 0, 3, 2, 4, 2, 1, 1, 0, 4], 5))
console.log(findSmallestInteger([5, 3, 2, 3], 2))
