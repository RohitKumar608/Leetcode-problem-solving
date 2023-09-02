/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  if (nums.length == 0 || nums.length === 1) return true
  if (nums[0] === 0) return false
  const sliceData = nums.slice(0, nums[0])
  let maxVal = Math.max(...sliceData)

  let index = sliceData.lastIndexOf(maxVal)
  let count = 1
  for (let idx = 0; idx < nums.length; idx++) {
    if (count + index >= nums.length - 1) return true
    let sliceData = nums.slice(count, count + maxVal)
    const currentMax = Math.max(...sliceData)
    index = sliceData.lastIndexOf(maxVal)
    if (maxVal - currentMax > 0) {
      count = currentMax
    } else {
      count += index + maxVal > 0 ? 1 : 0
      maxVal = currentMax
    }
  }

  return false
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([1, 2, 0, 1]))
console.log(canJump([2, 5, 0, 0]))
console.log(canJump([1, 1, 2, 2, 0, 1, 1]))

console.log(canJump([4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0]))
