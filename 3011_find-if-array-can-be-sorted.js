/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  function bitCount(n) {
    return n == 0 ? 0 : n.toString(2).match(/1/g).length
  }
  let currMin = nums[0]
  let currMax = nums[0]
  let prevMax = -Infinity
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (bitCount(currMin) === bitCount(n)) {
      currMin = Math.min(currMin, n)
      currMax = Math.max(currMax, n)
    } else {
      if (currMin < prevMax) {
        return false
      }
      prevMax = currMax
      currMin = n
      currMax = n
    }
  }
  return !(currMin < prevMax)
}

// console.log(canSortArray([1, 2, 3, 4, 5]))

// console.log(canSortArray([8, 4, 2, 30, 15]))
console.log(canSortArray([20, 16]))
