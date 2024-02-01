// https://leetcode.com/problems/largest-3-same-digit-number-in-string/
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const mapSet = {}
  for (let i = 0; i <= 9; i++) {
    const repeatStr = `${i}`.repeat(3)
    if (num.includes(repeatStr)) {
      mapSet[i] = repeatStr
    }
  }
  let result = ''
  for (const key in mapSet) {
    result = mapSet[key]
  }
  return result
}
