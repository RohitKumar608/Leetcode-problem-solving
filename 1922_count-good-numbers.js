/**
 * @param {number} n
 * @return {number}
 */

var countGoodNumbers = function (n) {
  const MODE = Math.pow(10, 9) + 7
  let result = 0
  const primeNumbers = {
    2: true,
    3: true,
    5: true,
    7: true,
  }
  let start = 0
  if (n > 1) {
    start = 1 + '0'.repeat(n - 1)
  }
  const end = 1 + '0'.repeat(n) - 1
  console.log(start, end)
  for (let i = +start; i <= end; i++) {
    const numToStr = `${i}`
    let hasFound = true
    for (let j = 0; j < numToStr.length; j++) {
      if (j % 2 === 0 && +numToStr[j] % 2 !== 0) {
        hasFound = false
        break
      }

      if (j % 2 === 1 && !primeNumbers[+numToStr[j]]) {
        hasFound = false
        break
      }
    }
    if (hasFound) {
      // console.log(numToStr)
      result++
      result = result % MODE
    }
  }
  return result
}

console.log(countGoodNumbers(4))
