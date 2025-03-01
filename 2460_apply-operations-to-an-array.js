/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i + 1] = 0
    }
  }
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
  }
  return nums
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]))
