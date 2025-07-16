/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  let oddCount = nums[0] % 2 !== 0 ? 1 : 0
  let eventCount = nums[0] % 2 == 0 ? 1 : 0
  let alternativeCount = 1
  let expectingEven = nums[0] % 2 !== 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      eventCount++
    } else {
      oddCount++
    }
    if (expectingEven && nums[i] % 2 === 0) {
      alternativeCount++
      expectingEven = !expectingEven
    }
    if (!expectingEven && nums[i] % 2 === 1) {
      alternativeCount++
      expectingEven = !expectingEven
    }
  }

  return Math.max(alternativeCount, oddCount, eventCount)
}

console.log(maximumLength([1, 2, 3, 4]))
console.log(maximumLength([1, 5, 9, 4, 2]))
console.log(maximumLength([2, 3]))
