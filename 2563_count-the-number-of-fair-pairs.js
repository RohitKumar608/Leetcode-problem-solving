/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  let result = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    const low = getLowerBound(lower - nums[i], nums, i + 1)
    const up = getUpperBound(upper - nums[i], nums, i + 1)
    result += up - low
  }
  return result
}

function getLowerBound(required, nums, start) {
  let end = nums.length
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (nums[mid] >= required) {
      end = mid
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return start
}
function getUpperBound(required, nums, start) {
  let end = nums.length
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (nums[mid] > required) {
      end = mid
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return start
}

console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11))
console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6))
