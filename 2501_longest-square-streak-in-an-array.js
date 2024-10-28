/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const set = new Set(nums)
  let result = -1
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let tempCount = 0
    let num = nums[i] * nums[i]
    while (set.has(num)) {
      tempCount += 1
      num = num * num
    }
    result = tempCount >= 1 ? Math.max(result, tempCount + 1) : result
  }
  return result
}

// console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]))
console.log(longestSquareStreak([2, 4]))
