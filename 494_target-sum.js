/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const cache = new Map()
  function backtracking(idx, sum) {
    if (cache.get(`${idx},${sum}`)) {
      return cache.get(`${idx},${sum}`)
    }
    if (idx === nums.length) {
      if (sum === target) {
        return 1
      }
      return 0
    }
    cache.set(
      `${idx},${sum}`,
      backtracking(idx + 1, sum + nums[idx]) +
        backtracking(idx + 1, sum - nums[idx])
    )
    return cache.get(`${idx},${sum}`)
  }
  return backtracking(0, 0)
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
