/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
  let prevCount = 0
  let currCount = 1
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      ++currCount
    } else {
      prevCount = currCount
      currCount = 1
    }
    ans = Math.max(ans, Math.min(prevCount, currCount))
    ans = Math.max(ans, Math.floor(currCount / 2))
  }
  return ans
}

console.log(maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1]))
