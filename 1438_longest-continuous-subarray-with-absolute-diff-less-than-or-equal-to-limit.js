/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let maxQueue = []
  let minQueue = []
  let left = 0
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    while (maxQueue.length && nums[i] > maxQueue[maxQueue.length - 1]) {
      maxQueue.pop()
    }
    while (minQueue.length && minQueue[minQueue.length - 1] > nums[i]) {
      minQueue.pop()
    }
    maxQueue.push(nums[i])
    minQueue.push(nums[i])

    while (maxQueue[0] - minQueue[0] > limit) {
      if (nums[left] == maxQueue[0]) {
        maxQueue.shift()
      }
      if (nums[left] == minQueue[0]) {
        minQueue.shift()
      }
      left++
    }
    result = Math.max(result, i - left + 1)
  }
  return result
}

console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5))
console.log(longestSubarray([8, 2, 4, 7], 4))
console.log(longestSubarray([1, 5, 6, 7, 8, 10, 6, 5, 6], 4))
console.log(
  longestSubarray(
    [
      7, 40, 10, 10, 40, 39, 96, 21, 54, 73, 33, 17, 2, 72, 5, 76, 28, 73, 59,
      22, 100, 91, 80, 66, 5, 49, 26, 45, 13, 27, 74, 87, 56, 76, 25, 64, 14,
      86, 50, 38, 65, 64, 3, 42, 79, 52, 37, 3, 21, 26, 42, 73, 18, 44, 55, 28,
      35, 87,
    ],
    63
  )
)
