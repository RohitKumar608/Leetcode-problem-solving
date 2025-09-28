/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a)
  let result = 0
  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i]
    const b = nums[i + 1]
    const c = nums[i + 2]
    if (a + b > c && a + c > b && b + c > a) {
      result = Math.max(result, a + b + c)
    }
  }

  return result
}

console.log(largestPerimeter([1, 2, 1, 10]))
console.log(largestPerimeter([2, 1, 2]))
