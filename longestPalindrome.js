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
  let right = s.length - 1
  let left = 0
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
        maxVal = Math.max(maxVal, right + 1 - left)
        if (!map[right + 1 - left]) {
          map[right + 1 - left] = [left, right + 1]
        }
      }
    }
    right--
    if (right === left) {
      left++
      right = s.length - 1
    }
  }
  return maxVal > 1 ? s.substring(map[maxVal][0], map[maxVal][1]) : s[0]
}

// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
// console.log(longestPalindrome('aacabdkacaa'))
console.log(longestPalindrome('eabcb'))
