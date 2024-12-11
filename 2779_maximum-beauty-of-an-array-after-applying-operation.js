/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maximumBeauty = function (nums, k) {
  const intervals = []
  for (const num of nums) {
    intervals.push([Math.max(num - k, 0), num + k])
  }
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let l = 0
  let r = 0
  let result = 0
  for (r = 0; r < intervals.length; r++) {
    while (
      !(
        intervals[l][0] <= intervals[r][0] && intervals[l][1] >= intervals[r][0]
      )
    ) {
      result = Math.max(result, r - l)
      l++
    }
  }
  result = Math.max(result, r - l)
  return result
}

var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b)
  let l = 0
  let result = 0
  for (let r = 0; r < nums.length; r++) {
    while (nums[r] - nums[l] > 2 * k) {
      l++
    }
    result = Math.max(result, r - l + 1)
  }
  return result
}

// console.log(maximumBeauty([6, 4, 1, 2], 2))
// console.log(maximumBeauty([12, 71], 10))
// console.log(maximumBeauty([49, 26], 12))
console.log(maximumBeauty([23, 1, 73], 25))
