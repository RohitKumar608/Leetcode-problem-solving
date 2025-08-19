/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let zeroCount = 0
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++
    } else {
      result += (zeroCount * (zeroCount + 1)) / 2
      zeroCount = 0
    }
  }
  result += (zeroCount * (zeroCount + 1)) / 2

  return result
}

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]))
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]))
console.log(
  zeroFilledSubarray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -7, 0, 0, -20, 0])
)
