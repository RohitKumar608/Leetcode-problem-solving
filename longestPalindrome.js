// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === s.split('').reverse().join('')) {
    return s
  }
  const map = {}
  let maxVal = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        const subStr1 = s.substring(i, j + 1)
        if (subStr1 === subStr1.split('').reverse().join('')) {
          maxVal = Math.max(maxVal, subStr1.length)
          if (!map[subStr1.length]) map[subStr1.length] = [subStr1]
          else map[subStr1.length] = [...map[subStr1.length], subStr1]
        }
      }
    }
  }
  return map[maxVal][0]
}

console.log(longestPalindrome('babad'))
