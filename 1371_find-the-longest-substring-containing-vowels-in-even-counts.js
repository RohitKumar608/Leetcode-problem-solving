/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  let result = 0
  let mask = 0
  let mapToIdx = { 0: -1 }
  const vowels = { a: true, e: true, i: true, o: true, u: true }
  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]]) {
      mask = mask ^ (s.charCodeAt(i) - 96)
    }
    if (mapToIdx[mask] !== undefined) {
      result = Math.max(result, i - mapToIdx[mask])
    } else {
      mapToIdx[mask] = i
    }
  }
  return result
}

console.log(findTheLongestSubstring('eleetminicoworoep'))
