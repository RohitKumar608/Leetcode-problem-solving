/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  n = n.toString(2)

  let currentСount = 0
  let maxCount = 0

  for (let i = 1; i < n.length; i++) {
    if (maxCount <= currentСount && n[i] === '1') {
      currentСount++
      maxCount = currentСount
    }
    if (n[i] !== '1') {
      currentСount++
    } else {
      currentСount = 0
    }
  }
  return maxCount
}
