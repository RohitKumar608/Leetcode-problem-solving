/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const arr = new Array(n).fill(0)
  const middleVal = Math.floor(n / 2)
  for (let i = 1; i <= middleVal; i++) {
    arr[i - 1] = i
    arr[middleVal + i - 1] = -1 * i
  }
  return arr
}
