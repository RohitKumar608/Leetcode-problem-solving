/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.reduce((acc, curr) => {
    let digits = 0
    let x = curr
    while (x >= 1) {
      x = x / 10
      digits++
    }
    if (curr !== 0 && digits % 2 === 0) {
      acc += 1
    }
    return acc
  }, 0)
}
