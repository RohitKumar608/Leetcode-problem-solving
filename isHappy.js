// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  const map = { [n]: 1 }
  while (true) {
    n = n
      .toString()
      .split('')
      .reduce((sum, val) => sum + val * val, 0)
    map[n] = (map[n] || 0) + 1
    if (n === 1) return true
    if (n === 0 || map[n] > 1) return false
  }
}

console.log(isHappy(2))
console.log(isHappy(19))
