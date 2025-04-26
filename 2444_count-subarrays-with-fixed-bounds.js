/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let minI = -1
  let badI = -1
  let maxI = -1
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minK) minI = i
    if (nums[i] === maxK) maxI = i
    if (nums[i] < minK || nums[i] > maxK) badI = i
    result += Math.max(0, Math.min(maxI, minI) - badI)
  }
  return result
}

// console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5))
// console.log(countSubarrays([1, 1, 1, 1], 1, 1))
// console.log(countSubarrays([1, 2], 2, 1))
console.log(
  countSubarrays(
    [
      35054, 398719, 945315, 945315, 820417, 945315, 35054, 945315, 171832,
      945315, 35054, 109750, 790964, 441974, 552913,
    ],
    35054,
    945315
  )
)
