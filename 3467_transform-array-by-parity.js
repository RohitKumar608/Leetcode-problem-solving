/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  const transFormArr = new Array(nums.length).fill(0)
  let count = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      transFormArr[count] = 1
      count--
    }
  }
  return transFormArr
}
