/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const dp = new Map()
  function dfs(alice, i, M) {
    if (i >= piles.length) return 0
    if (dp.has(`${alice},${i},${M}`)) {
      return dp.get(`${alice},${i},${M}`)
    }
    let res = alice ? 0 : Infinity
    let total = 0
    for (let X = 1; X <= 2 * M; X++) {
      if (i + X > piles.length) {
        break
      }
      total += piles[i + X - 1]
      if (alice) {
        res = Math.max(res, total + dfs(!alice, i + X, Math.max(X, M)))
      } else {
        res = Math.min(res, dfs(!alice, i + X, Math.max(X, M)))
      }
    }
    dp.set(`${alice},${i},${M}`, res)
    return res
  }
  return dfs(true, 0, 1)
}

// console.log(stoneGameII([1, 2, 3, 4, 5, 100]))
// console.log(stoneGameII([2, 7, 9, 4, 4]))
console.log(
  stoneGameII([
    8270, 7145, 575, 5156, 5126, 2905, 8793, 7817, 5532, 5726, 7071, 7730, 5200,
    5369, 5763, 7148, 8287, 9449, 7567, 4850, 1385, 2135, 1737, 9511, 8065,
    7063, 8023, 7729, 7084, 8407,
  ])
)
