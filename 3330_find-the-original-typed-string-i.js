/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let result = 1
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i + 1]) {
      result++
    }
  }
  return result
}
