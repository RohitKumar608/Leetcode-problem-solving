// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let minStart = 0
  let maxVal = 0
  let left = 0
  let maxEnd = s.length - 1
  let right = s.length - 1

  while (right > left && left < s.length) {
    if (s[left] == s[right]) {
      let tempI = left
      let temJ = right
      let isEventBreak = false
      while (tempI <= right) {
        if (s[tempI] !== s[temJ]) {
          isEventBreak = true
          break
        }
        tempI++
        temJ--
      }
      if (!isEventBreak) {
        if (maxVal < right + 1 - left) {
          maxVal = right + 1 - left
          minStart = left
          maxEnd = right + 1
        }
        // checking the best case scenario
        if (left == 0 && right == s.length - 1) {
          return s
        }
      }
    }
    right--
    if (right === left) {
      left++
      right = s.length - 1
    }
  }
  return maxVal > 1 ? s.substring(minStart, maxEnd) : s[0]
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('aacabdkacaa'))
console.log(longestPalindrome('aabaa'))
