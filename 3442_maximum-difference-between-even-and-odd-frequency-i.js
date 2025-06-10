/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  const count = new Array(26).fill(0)
  let oddCount = 0
  let evenCount = Infinity
  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - 97]++
  }
  for (let i = 0; i < 26; i++) {
    if (count[i] && count[i] % 2 === 0) {
      evenCount = Math.min(evenCount, count[i])
    } else {
      oddCount = Math.max(oddCount, count[i])
    }
  }
  return oddCount - evenCount
}
