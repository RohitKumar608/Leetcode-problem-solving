/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 1) return 1
  let result = 0
  for (let i = 1; i <= n; i++) {
    result += i
    if (result > n) {
      return i - 1
    }
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let low = 1
  let high = n

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const coinsUsed = (mid * (mid + 1)) / 2
    if (coinsUsed === n) {
      return mid
    } else if (coinsUsed > n) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return high
}

console.log(arrangeCoins(8))
console.log(arrangeCoins(5))
console.log(arrangeCoins(10))
