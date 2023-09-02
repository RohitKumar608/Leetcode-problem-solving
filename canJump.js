/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  if (nums.length == 0 || nums.length === 1) return true
  if (nums[0] === 0) return false
  let firstVal = nums[0]
  let sliceData = nums.slice(0, firstVal)
  let maxVal = Math.max(...sliceData)
  let count = firstVal
  if (count >= nums.length - 1) return true
  if (nums[count] === 0 && nums[maxVal] === 0) return false
  while (count < nums.length) {
    if (count + maxVal >= nums.length - 1) return true
    let sliceData = nums.slice(count, count + maxVal)
    maxVal = Math.max(...sliceData)
    count += maxVal

    if (nums[count] === 0) return false
    if (nums[count] === 0) return false
  }
  return true
}

// console.log(canJump([2, 3, 1, 1, 4]))
// console.log(canJump([3, 2, 1, 0, 4]))
// console.log(canJump([1, 2, 0, 1]))
// console.log(canJump([2, 5, 0, 0]))
console.log(canJump([1, 1, 2, 2, 0, 1, 1]))
