/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */

var divideString = function (s, k, fill) {
  const result = []
  for (let i = 0; i < s.length; i = i + k) {
    const str = s.substring(i, i + k)
    if (str.length === k) result.push(str)
    else result.push(str + fill.repeat(k - str.length))
  }
  return result
}
