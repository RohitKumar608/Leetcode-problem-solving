/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
  const n = nums.length
  const result = new Array(n)

  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (num === 0) {
      result[i] = 0
    } else {
      const target = (((i + num) % n) + n) % n
      result[i] = nums[target]
    }
  }

  return result
}

// console.log(constructTransformedArray([3, -10, 1, 1]))
// console.log(constructTransformedArray([-1, 4, -1]))
// console.log(constructTransformedArray([-10]))
console.log(constructTransformedArray([-10, -10, -4]))
