// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let str = ''
  let maxLength = 0
  let right = 0
  while (right < s.length) {
    str = str + s[right]
    while (s[right + 1] && str.includes(s[right + 1])) {
      maxLength = Math.max(maxLength, str.length)
      str = str.slice(1)
    }
    maxLength = Math.max(maxLength, str.length)
    right++
  }
  return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring('au'))
