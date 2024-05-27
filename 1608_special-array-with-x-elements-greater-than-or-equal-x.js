/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 1; i <= 1000; i++) {
    const greaterEqualValLen = nums.filter((val) => val >= i).length
    if (greaterEqualValLen === i) {
      return i
    }
  }
  return -1
}

console.log(specialArray([0, 4, 3, 0, 4]))
