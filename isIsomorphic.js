//https:leetcode.com/problems/isomorphic-strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic1 = function (s, t) {
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

var isIsomorphic2 = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false
    }
  }
  return true
}

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false
  const map1 = [256]
  const map2 = [256]
  for (let index = 0; index < s.length; index++) {
    if (map1[s[index]] !== map2[t[index]]) {
      return false
    }
    map1[s[index]] = index + 1
    map2[t[index]] = index + 1
  }
  return true
}

console.log(isIsomorphic('egg', 'add'))

// console.log(isIsomorphic('foo', 'bar'))
// console.log(isIsomorphic('paper', 'title'))
// console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))

// console.log(isIsomorphic('badc', 'baba'))
