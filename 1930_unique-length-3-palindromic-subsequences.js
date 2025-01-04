/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const lastOccurrence = new Array(26).fill(0)
  const visited = new Set()
  let result = 0

  // Record the last occurrence of each character
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s.charCodeAt(i) - 97] = i
  }

  // Iterate through the string to find unique palindromic subsequences
  for (let i = 0; i < s.length; i++) {
    const lastIdx = lastOccurrence[s.charCodeAt(i) - 97]
    if (visited.has(s[i])) {
      continue
    }
    visited.add(s[i])

    const uniqueChars = new Set()
    let currentCharFreq = 0

    // Check characters between the current index and the last occurrence
    for (let j = i; j <= lastIdx; j++) {
      uniqueChars.add(s[j])
      if (s[j] === s[i]) {
        currentCharFreq++
      }
    }

    // Count palindromic subsequences
    if (currentCharFreq >= 3) {
      result++
    }
    if (currentCharFreq >= 2) {
      result += uniqueChars.size - 1
    }
  }

  return result
}

console.log(countPalindromicSubsequence('bbcbaba'))
