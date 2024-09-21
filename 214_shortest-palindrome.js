/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let rev = s.split('').reverse().join('')
  for (let i = 0; i < s.length; i++) {
    if (s.substring(0, s.length - i) === rev.substring(i))
      return rev.substring(0, i) + s
  }
  return ''
}
var shortestPalindrome = function (s) {
  let prefix = 0
  let suffix = 0
  const base = 29
  let lastIndex = 0
  let power = 1
  const MOD = 10 ** 9 + 7
  for (let i = 0; i < s.length; i++) {
    const char = 97 - s[i].charCodeAt(0)
    prefix = (prefix * base) % MOD
    prefix = (prefix + char) % MOD
    suffix = (suffix + char * power) % MOD
    power = (power * base) % MOD
    if (prefix === suffix) {
      lastIndex = i
    }
  }
  suffix = s.substring(lastIndex + 1)
  let reverseStr = ''
  for (let i = suffix.length - 1; i >= 0; i--) {
    reverseStr += suffix[i]
  }
  return reverseStr + s
}
// console.log(shortestPalindrome('aacecaaa'))
// console.log(shortestPalindrome('abcd'))
console.log(shortestPalindrome('abbacd'))
