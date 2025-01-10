/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const word2Map = new Array(26).fill(0)

  // Calculate the maximum frequency of each character in words2
  for (const word of words2) {
    const frequency = new Array(26).fill(0)
    for (const char of word) {
      frequency[char.charCodeAt(0) - 97]++
    }
    for (let i = 0; i < 26; i++) {
      word2Map[i] = Math.max(word2Map[i], frequency[i])
    }
  }

  const result = []

  // Check each word in words1
  for (const word of words1) {
    const frequency = new Array(26).fill(0)
    for (const char of word) {
      frequency[char.charCodeAt(0) - 97]++
    }
    let isUniversal = true
    for (let i = 0; i < 26; i++) {
      if (frequency[i] < word2Map[i]) {
        isUniversal = false
        break
      }
    }
    if (isUniversal) {
      result.push(word)
    }
  }

  return result
}

console.log(
  wordSubsets(
    ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
    ['lo', 'eo']
  )
)
