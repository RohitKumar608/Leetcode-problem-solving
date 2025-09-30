/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length > 1) {
    const newArr = []
    for (let i = 1; i < nums.length; i++) {
      newArr[i - 1] = nums[i - 1] + nums[i]
    }
    nums = newArr
  }
  return nums[0] % 10
}

console.log(triangularSum([1, 2, 3, 4, 5]))
