/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n == 2 || n == 3) return n - 1
  const visited = new Map()
  function backtrack(num, product, sum) {
    if (visited.has(`${num},${product},${sum}`)) {
      return visited.get(`${num},${product},${sum}`)
    }
    if (sum > n) {
      return 0
    }
    if (sum === n) {
      return product
    }
    let result = 0
    for (let i = num; i <= Math.ceil(n / 2); i++) {
      result = Math.max(result, backtrack(i, product * i, sum + i))
      result = Math.max(result, backtrack(i + 1, i + 1, i + 1))
    }
    visited.set(`${num},${product},${sum}`, result)
    return result
  }
  return backtrack(2, 2, 2)
}

console.log(integerBreak(48))
