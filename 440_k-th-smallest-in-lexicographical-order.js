/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let curr = 1
  let i = 1
  function count(curr) {
    let res = 0
    let nei = curr + 1
    while (curr <= n) {
      res += Math.min(nei, n + 1) - curr
      curr *= 10
      nei *= 10
    }
    return res
  }
  while (i < k) {
    const step = count(curr)
    if (i + step <= k) {
      curr = curr + 1
      i += step
    } else {
      curr *= 10
      i += 1
    }
  }
  return curr
}
