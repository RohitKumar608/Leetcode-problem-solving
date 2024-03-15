/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum1 = function (nums, goal) {
  let result = 0
  const totalSum = nums.reduce((a, b) => a + b, 0)
  if (goal > totalSum) {
    return result
  }
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length - i; j++) {
      const sum = nums.slice(j, j + i).reduce((a, b) => a + b, 0)
      if (sum === goal) {
        result++
      }
    }
  }

  return result
}

var numSubarraysWithSum2 = function (nums, goal) {
  let result = 0
  const cache = { 0: 1 }
  let prefix = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    prefix += nums[i]
    if (cache[prefix - goal]) {
      result += cache[prefix - goal]
    }
    cache[prefix] = (cache[prefix] || 0) + 1
  }
  if (prefix === 0 && goal === 0) {
    return (len * (len + 1)) / 2
  }
  return result
}
var numSubarraysWithSum = function (nums, goal) {
  function helper(goal) {
    if (goal < 0) {
      return 0
    }
    let left = 0
    let sum = 0
    let res = 0
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
      while (sum > goal) {
        sum -= nums[left]
        left++
      }
      res += i - left + 1
    }
    return res
  }
  return helper(goal) - helper(goal - 1)
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0))
console.log(numSubarraysWithSum([0, 1, 1, 1, 1], 3))

console.log(numSubarraysWithSum([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 0))
console.log(numSubarraysWithSum([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1))
