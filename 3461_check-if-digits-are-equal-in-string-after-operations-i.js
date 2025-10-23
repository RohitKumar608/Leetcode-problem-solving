/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  while (s.length > 2) {
    let tempStr = ''
    for (let i = 0; i < s.length - 1; i++) {
      tempStr += (+s[i] + +s[i + 1]) % 10
    }
    s = tempStr
  }
  return s[0] === s[1]
}

console.log(hasSameDigits('50289'))
