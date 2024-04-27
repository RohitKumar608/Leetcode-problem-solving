/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  const cache = new Map()
  function helper(r, k) {
    if (k === key.length) {
      return 0
    }

    if (cache.has(`${r},${k}`)) {
      return cache.get(`${r},${k}`)
    }
    let res = Infinity
    for (let i = 0; i < ring.length; i++) {
      if (key[k] === ring[i]) {
        const minDist = Math.min(Math.abs(r - i), ring.length - Math.abs(r - i))
        res = Math.min(res, minDist + 1 + helper(i, k + 1))
      }
    }
    cache.set(`${r},${k}`, res)
    return res
  }
  return helper(0, 0)
}

console.log(findRotateSteps('godding', 'gd'))

console.log(findRotateSteps('godding', 'godding'))
