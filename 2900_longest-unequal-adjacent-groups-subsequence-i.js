/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  const result1 = []
  const result2 = []
  let currLook1 = 0
  let currLook2 = 1
  for (let i = 0; i < words.length; i++) {
    if (groups[i] == groups[i + 1]) {
      continue
    }
    if (groups[i] == currLook1) {
      result1.push(words[i])
      currLook1 = currLook1 == 0 ? 1 : 0
    }
    if (groups[i] == currLook2) {
      result2.push(words[i])
      currLook2 = currLook2 == 0 ? 1 : 0
    }
  }
  if (result1.length > result2.length) {
    return result1
  }
  return result2
}
