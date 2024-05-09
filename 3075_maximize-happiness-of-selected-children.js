/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  let result = 0
  let count = 0
  happiness.sort((a, b) => a - b)
  while (happiness.length && k) {
    const poppedVal = happiness.pop()
    if (poppedVal - count <= 0) {
      break
    }
    result += poppedVal - count
    count++
    k--
  }
  return result
}

console.log(maximumHappinessSum([1, 2, 3], 2))
console.log(maximumHappinessSum([2, 3, 4, 5], 1))
