/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  s = s.split('')
  let extraClosingCount = 0
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      extraClosingCount--
    } else {
      extraClosingCount++
    }
    result = Math.max(result, extraClosingCount)
  }
  return (result + 1) / 2
}

console.log(minSwaps(']]][[['))
console.log(minSwaps('][[]][][[][]'))
