/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const primeNumbers = []
  function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }
  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i)
    }
  }
  let minDiff = Infinity
  let result = [-1, -1]
  for (let i = 0; i < primeNumbers.length - 1; i++) {
    let diff = primeNumbers[i + 1] - primeNumbers[i]
    if (diff < minDiff) {
      minDiff = diff
      result = [primeNumbers[i], primeNumbers[i + 1]]
    }
  }
  return result
}

console.log(closestPrimes(10, 20)) // [11, 13]
console.log(closestPrimes(100, 200)) // [101, 103];
