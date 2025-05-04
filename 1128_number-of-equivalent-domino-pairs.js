/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const map = new Map()
  const alreadyVisited = new Set()
  let result = 0
  for (let i = 0; i < dominoes.length; i++) {
    const [a, b] = dominoes[i]
    if (!map.has(`${a},${b}`)) {
      map.set(`${a},${b}`, 1)
    } else {
      map.set(`${a},${b}`, map.get(`${a},${b}`) + 1)
    }
  }
  for (const [key, val] of map) {
    let sum = val
    if (!alreadyVisited.has(key)) {
      const [d, c] = key.split(',')
      if (c !== d) {
        sum += map.get(`${c},${d}`) || 0
      }
      result += (sum * (sum - 1)) / 2
      alreadyVisited.add(`${c},${d}`)
    }
  }
  return result
}

console.log(
  numEquivDominoPairs([
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 2],
  ])
)
console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
)
