/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let result = 0
  let cache = new Array(26).fill(0)
  let maxCount = 0
  let start = 0
  for (let end = 0; end < s.length; end++) {
    cache[s.charCodeAt((i = end)) % 65]++
    maxCount = Math.max(maxCount, cache[s.charCodeAt(end) % 65])
    if (end - start - maxCount + 1 > k) {
      while (end - start - maxCount + 1 > k) {
        cache[s[start].charCodeAt(0) % 65]--
        start++
      }
    }
    result = Math.max(result, end - start + 1)
  }
  return result
}

console.log(characterReplacement('AABABBA', 1))
console.log(characterReplacement('ABAB', 2))
console.log(characterReplacement('ABAA', 0))
