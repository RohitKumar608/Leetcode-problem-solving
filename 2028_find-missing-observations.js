/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  if (mean == 6 && Math.min(...rolls) <= 5) return []
  const sum = rolls.reduce((acc, roll) => acc + roll, 0)
  let remainingSum = mean * (n + rolls.length) - sum
  const avgValues = Math.floor(remainingSum / n)
  if (avgValues <= 0 || remainingSum > 6 * n) return []
  const newRolls = new Array(n).fill(avgValues)
  remainingSum -= avgValues * n
  let left = 0
  while (remainingSum > 0) {
    newRolls[left]++
    remainingSum--
    left++
  }
  return newRolls
}

console.log(missingRolls([3, 2, 4, 3], 4, 2))
console.log(missingRolls([1, 5, 6], 3, 4))
