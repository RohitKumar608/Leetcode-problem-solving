/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let isSorted = false
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        isSorted = false
        ;[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
      }
    }
  }
}

var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
