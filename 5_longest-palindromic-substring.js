/**
 * @param {string} s
 * @return {string}
 */

function getLongestPalindrome(left, right, s, result) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    const subStr = s.slice(left, right + 1)
    if (subStr.length > result.length) {
      result = subStr
    }
    left--
    right++
  }
  return result
}

var longestPalindrome = function (s) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i
    result = getLongestPalindrome(left, right, s, result)
    left = i
    right = i + 1
    result = getLongestPalindrome(left, right, s, result)
  }
  return result
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
