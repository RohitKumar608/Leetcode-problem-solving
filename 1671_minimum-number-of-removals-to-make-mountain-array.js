/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const len = nums.length
  const lis = new Array(len).fill(1)
  const lds = new Array(len).fill(1)
  let result = len
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        lis[i] = Math.max(lis[i], 1 + lis[j])
      }
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[i]) {
        lds[i] = Math.max(lds[i], 1 + lds[j])
      }
    }
  }

  for (let i = 1; i < len - 1; i++) {
    if (Math.min(lis[i], lds[i]) > 1) {
      result = Math.min(result, len - lis[i] - lds[i] + 1)
    }
  }
  return result
}

console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]))
