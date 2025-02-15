/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    const square = i * i
    if (partitionString(0, 0, `${square}`, i)) {
      result += square
    }
  }
  function partitionString(i, currentSum, str, target) {
    if (i === str.length) {
      return currentSum === target
    }
    for (let j = i; j < str.length; j++) {
      const currentNumber = Number(str.slice(i, j + 1))
      if (partitionString(j + 1, currentSum + currentNumber, str, target)) {
        return true
      }
    }
    return false
  }
  return result
}

console.log(punishmentNumber(37))
