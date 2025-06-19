/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  let result = 1
  let left = 0
  nums.sort((a, b) => a - b)

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] - nums[left] > k) {
      left = right
      result++
    }
  }
  return result
}

console.log(partitionArray([3, 6, 1, 2, 5], 2))
console.log(partitionArray([2, 2, 4, 5], 0))
