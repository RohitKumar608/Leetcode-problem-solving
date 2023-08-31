// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false

  let sPointer = 0
  for (let i = 0; i < t.length; i++) {
    if (s[sPointer] === t[i]) {
      sPointer++
    }
  }
  return s.length === sPointer
}
