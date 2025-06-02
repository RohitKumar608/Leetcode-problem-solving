/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */

var distributeCandies = function (n, limit) {
  let result = 0
  for (let i = 0; i <= Math.min(limit, n); i++) {
    let j = n - i
    if (j > 2 * limit) continue
    const k = Math.min(limit, j)
    j = j - k
    const candy = k - j + 1
    result += Math.max(0, candy)
  }
  return result
}
