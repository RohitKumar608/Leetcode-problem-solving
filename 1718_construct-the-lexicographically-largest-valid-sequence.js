/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  const res = new Array(2 * n - 1).fill(0)
  const used = new Array(n + 1).fill(false)
  dfs(0)
  function dfs(i) {
    if (i === res.length) return true
    if (res[i] !== 0) return dfs(i + 1)
    for (let j = n; j >= 1; j--) {
      if (used[j]) continue
      if (j === 1) {
        res[i] = j
        used[j] = true
        if (dfs(i + 1)) return true
        res[i] = 0
        used[j] = false
      } else if (i + j < res.length && res[i + j] === 0) {
        res[i] = res[i + j] = j
        used[j] = true
        if (dfs(i + 1)) return true
        res[i] = res[i + j] = 0
        used[j] = false
      }
    }
    return false
  }
  return res
}
