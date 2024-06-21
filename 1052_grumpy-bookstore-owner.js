/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let result = 0
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      result += customers[i]
      customers[i] = 0
    }
  }
  const grumpyArr = customers.slice(0, minutes)
  let grumpyMaxVal = grumpyArr.reduce((sum, g) => sum + g, 0)
  let left = 0
  let right = minutes
  let currentMax = grumpyMaxVal
  while (right < customers.length) {
    grumpyMaxVal = grumpyMaxVal + customers[right] - customers[left]
    currentMax = Math.max(currentMax, grumpyMaxVal)
    left++
    right++
  }
  return currentMax + result
}

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))
