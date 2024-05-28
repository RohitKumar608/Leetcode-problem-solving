/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let result = 0
  let start = 0
  let end = 0
  let cost = maxCost
  while (end < s.length) {
    cost = cost - Math.abs(s.charCodeAt(end) - t.charCodeAt(end))
    end++
    while (cost < 0) {
      cost = cost + Math.abs(s.charCodeAt(start) - t.charCodeAt(start))
      start++
    }
    result = Math.max(result, end - start)
  }
  return result
}

console.log(equalSubstring('abcd', 'bcdf', 3))
console.log(equalSubstring('abcd', 'cdef', 3))
console.log(equalSubstring('abcd', 'acde', 0))
