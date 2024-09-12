/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set(allowed)
  let result = 0
  for (let i = 0; i < words.length; i++) {
    let allCharMatched = true
    for (let j = 0; j < words[i].length; j++) {
      allCharMatched = allCharMatched && allowedSet.has(words[i][j])
    }
    if (allCharMatched) result++
  }
  return result
}
