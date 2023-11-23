// https://leetcode.com/problems/factorial-trailing-zeroes
/**
 * @param {number} n
 * @return {number}
 */

const set = { 1: 1, 2: 2 }
const trailingZeros = {}
var trailingZeroes = function (n) {
  if (n in trailingZeros) return trailingZeros[n]
  if (n === 0) return 0
  set[n] = trailingZeroesMemo(n)
  const res = `${set[n]}`
  let result = 0
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === '0') {
      result++
    } else {
      trailingZeros[n] = result
      return result
    }
  }
  return result
}

var trailingZeroesMemo = function (n) {
  if (n === 1) return 1
  if (n in set) {
    return set[n]
  }
  return BigInt(n) * BigInt(trailingZeroesMemo(n - 1))
}

var trailingZeroes = function (n) {
  let result = 0
  for (let i = 5; i <= n; i = i * 5) {
    result = result + Math.floor(n / i)
  }
  return result
}

let result = []
for (let i = 1; i <= 20; i++) {
  result[i] = trailingZeroes(i)
}

console.log(result, trailingZeros)
