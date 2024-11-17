/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  let result = Infinity
  let sum = 0
  q = []
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r]
    if (sum >= k) {
      result = Math.min(result, r + 1)
    }
    while (q.length && sum - q[0][0] >= k) {
      const [prefix, endIdx] = q.shift()
      result = Math.min(result, r - endIdx)
    }
    while (q.length && q[q.length - 1][0] >= sum) {
      q.pop()
    }
    q.push([sum, r])
  }
  return result === Infinity ? -1 : result
}

// console.log(shortestSubarray([2, -1, 2], 3))
// console.log(shortestSubarray([84, -37, 32, 40, 95], 167))
console.log(shortestSubarray([-28, 81, -20, 28, -29], 89))
