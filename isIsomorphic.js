//https:leetcode.com/problems/isomorphic-strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  if (s == t) return true
  const mapSet = {}
  const mapSet2 = {}
  for (let idx = 0; idx < s.length; idx++) {
    if (!mapSet[s[idx]]) {
      mapSet[s[idx]] = t[idx]
    }
    if (!mapSet2[t[idx]]) {
      mapSet2[t[idx]] = s[idx]
    }

    if (mapSet[s[idx]] !== t[idx] || mapSet2[t[idx]] !== s[idx]) {
      return false
    }
  }
  return true
}

console.log(isIsomorphic('egg', 'add'))

console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))

console.log(isIsomorphic('badc', 'baba'))
