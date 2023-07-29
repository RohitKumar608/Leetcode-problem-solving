// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let str = ''
  let maxLength = 0
  let left = 0
  let right = 0
  while (right < s.length) {
    str = s.substring(left, right + 1)
    maxLength = Math.max(maxLength, right + 1 - left)
    right++
    while (str.includes(s[right]) && left < right) {
      str = s.substring(left, right + 1)
      left++
    }
  }
  return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('dvdf'))
