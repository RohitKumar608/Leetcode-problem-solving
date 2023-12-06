// https://leetcode.com/problems/number-of-segments-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim()
  let segments = 0
  let prevVal = null
  for (let i = 0; i < s.length; i++) {
    if (prevVal && prevVal !== ' ' && s[i] === ' ') {
      segments++
    }
    prevVal = s[i]
  }
  return segments > 0 ? segments + 1 : segments
}

console.log(countSegments(', , , ,        a, eaefa'))
console.log(
  countSegments('Of all the gin joints in all the towns in all the world,   ')
)
