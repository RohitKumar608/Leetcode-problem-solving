/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
function minPatches(nums, n) {
  let patches = 0
  let sum = 0
  let i = 0

  while (sum < n) {
    if (i < nums.length && nums[i] <= sum + 1) {
      sum += nums[i]
      i++
    } else {
      sum += sum + 1
      patches++
    }
  }
  return patches
}

// console.log(minPatches([1, 3], 6))
console.log(minPatches([1, 5, 10], 20))
