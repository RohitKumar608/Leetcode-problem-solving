/**
 * @param {string} s
 * @return {number}
 */

// sliding window
var numberOfSubstrings = function (s) {
  let left = 0
  let result = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
    while (map.get('a') >= 1 && map.get('b') >= 1 && map.get('c') >= 1) {
      result += s.length - i
      map.set(s[left], map.get(s[left]) - 1)
      left++
    }
  }
  return result
}

var numberOfSubstrings = function (s) {
  const idx = [-1, -1, -1]
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') idx[0] = i
    if (s[i] === 'b') idx[1] = i
    if (s[i] === 'c') idx[2] = i
    result += Math.min(...idx) + 1
  }
  return result
}

console.log(numberOfSubstrings('abcabc'))
