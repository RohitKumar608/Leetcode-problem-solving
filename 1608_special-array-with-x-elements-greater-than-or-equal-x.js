/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 1; i <= 1000; i++) {
    const greaterEqualValLen = nums.filter((val) => val >= i).length
    if (greaterEqualValLen === i) {
      return i
    }
  }
  return -1
}

var specialArray = function (nums) {
  const prefix = new Array(nums.length + 1).fill(0)
  for (const num of nums) {
    prefix[Math.min(num, nums.length)]++
  }
  let totalRight = 0
  for (let i = nums.length; i >= 1; i--) {
    totalRight += prefix[i]
    if (totalRight === i) {
      return i
    }
  }
  return -1
}

// console.log(specialArray([0, 4, 3, 0, 4]))
console.log(specialArray([3, 5]))
