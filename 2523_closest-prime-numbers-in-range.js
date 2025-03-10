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

var closestPrimes = function (left, right) {
  function getPrime() {
    const numbers = new Array(right + 1).fill(true)
    numbers[0] = false
    numbers[1] = false
    for (let i = 2; i <= Math.floor(Math.sqrt(right)) + 1; i++) {
      if (!numbers[i]) {
        continue
      }
      for (let j = i * i; j <= right; j += i) {
        numbers[j] = false
      }
    }
    const primeNumbers = []
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] && i >= left) {
        primeNumbers.push(i)
      }
    }
    return primeNumbers
  }
  const primes = getPrime()
  const result = primes.length > 1 ? [primes[0], primes[1]] : [-1, -1]
  let minDiff = right - left
  for (let i = 0; i < primes.length - 1; i++) {
    const diff = primes[i + 1] - primes[i]
    if (diff < minDiff) {
      minDiff = diff
      result[0] = primes[i]
      result[1] = primes[i + 1]
    }
  }
  return result
}

// console.log(closestPrimes(10, 20)) // [11, 13]
// console.log(closestPrimes(100, 200)) // [101, 103];
console.log(closestPrimes(710119, 710189)) // [71011, 71013];
