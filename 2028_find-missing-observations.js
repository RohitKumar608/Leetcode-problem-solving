/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  let newRolls = new Array(n).fill(0)
  let sum = rolls.reduce((acc, roll) => acc + roll, 0)
  let remainingSum = mean * (n + rolls.length) - sum
  let avgValues = Math.floor(remainingSum / n)
  if (avgValues <= 0) return []
  let left = 0
  while (remainingSum > 0) {
    newRolls[left] += avgValues
    if (newRolls[left] > 6) return []

    remainingSum -= avgValues
    left++
    if (remainingSum === 0) {
      return newRolls
    }
    if (remainingSum < 0) {
      return []
    }
    if (left === n) {
      left = 0
      avgValues = 1
    }
  }
  return []
}

console.log(missingRolls([3, 2, 4, 3], 4, 2))
console.log(missingRolls([1, 5, 6], 3, 4))
