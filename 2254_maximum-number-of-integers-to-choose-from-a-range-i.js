/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  const set = new Set(banned)
  let count = 0
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      if (sum + i > maxSum) {
        return count
      }
      count++
      sum += i
    }
  }
  return count
}
