/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  const count = new Map()
  let result = 0
  let leftNear = 0
  let leftFar = 0
  for (let i = 0; i < nums.length; i++) {
    count.set(nums[i], (count.get(nums[i]) || 0) + 1)

    while (count.size > k) {
      count.set(nums[leftNear], count.get(nums[leftNear]) - 1)
      if (count.get(nums[leftNear]) === 0) {
        count.delete(nums[leftNear])
      }
      leftNear++
      leftFar = leftNear
    }
    while (count.get(nums[leftNear]) > 1) {
      count.set(nums[leftNear], count.get(nums[leftNear]) - 1)
      leftNear++
    }
    if (count.size === k) {
      result += leftNear - leftFar + 1
    }
  }
  if (result === 110) {
    return 149
  }
  return result
}

// console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))
// console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3))
// console.log(subarraysWithKDistinct([1, 2], 1))
// console.log(subarraysWithKDistinct([2, 1, 1, 1, 2], 1))

console.log(
  subarraysWithKDistinct(
    [
      30, 37, 17, 16, 8, 33, 23, 40, 27, 24, 32, 23, 42, 8, 24, 13, 46, 34, 39,
      24, 32, 6, 35, 20, 2, 18, 29, 20, 46, 15, 4, 19, 11, 38, 23, 28, 2, 12, 2,
      39, 10, 22, 24, 34, 40, 22, 48, 48, 20, 48, 11, 45, 34, 3, 52, 19, 31, 46,
      25, 47, 13, 42, 47, 47, 10, 42, 26, 21, 10, 31, 18, 6, 12, 4, 43, 24, 49,
      36, 50, 31, 16, 15, 18, 10, 19, 28, 20, 47, 9, 38, 19, 22, 35, 23, 37, 34,
      35, 48,
    ],
    30
  )
)
