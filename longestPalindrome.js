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
        const subStr = s.substring(left, right + 1)
        maxVal = Math.max(maxVal, subStr.length)
        if (map[subStr.length]) {
          map[subStr.length] = [...map[subStr.length], subStr]
        } else {
          map[subStr.length] = [subStr]
        }
      }
    }
    right--
    if (right === left) {
      left++

      right = s.length - 1
    }
  }
  return maxVal > 1 ? map[maxVal][0] : s[0]
}

// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
// console.log(longestPalindrome('aacabdkacaa'))
console.log(longestPalindrome('eabcb'))
