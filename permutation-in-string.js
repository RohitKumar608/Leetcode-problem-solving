// https://leetcode.com/problems/permutation-in-string/description/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  s1 = s1
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
  for (let i = 0; i < s2.length; i++) {
    const subStr = s2
      .substring(i, i + s1.length)
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
    if (subStr === s1) return true
  }
  return false
}
