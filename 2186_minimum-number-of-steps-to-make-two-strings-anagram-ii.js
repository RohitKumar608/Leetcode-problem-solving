/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps1 = function (s, t) {
  const sMap = {}
  const tMap = {}
  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (s[i]) sMap[s[i]] = (sMap[s[i]] || 0) + 1
    if (t[i]) tMap[t[i]] = (tMap[t[i]] || 0) + 1
  }
  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (s[i] && tMap[s[i]]) {
      tMap[s[i]]--
    }
    if (t[i] && sMap[t[i]]) {
      sMap[t[i]]--
    }
  }
  const res =
    Object.values(sMap).reduce((a, b) => a + b, 0) +
    Object.values(tMap).reduce((a, b) => a + b, 0)
  return res
}

var minSteps = function (s, t) {
  const sMap = new Array(26).fill(0)
  const tMap = [...sMap]
  let result = 0
  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (s[i]) {
      sMap[s.charCodeAt(i) % 97]++
    }
    if (t[i]) {
      tMap[t.charCodeAt(i) % 97]++
    }
  }
  for (let i = 0; i < 26; i++) {
    result += Math.abs(sMap[i] - tMap[i])
  }
  return result
}

console.log(minSteps('leetcode', 'coats'))
