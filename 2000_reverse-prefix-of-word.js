/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let result = ''
  let charFound = false
  for (let i = 0; i < word.length; i++) {
    if (!charFound) {
      result = word[i] + result
    } else {
      result += word[i]
    }
    charFound = charFound || word[i] === ch
  }
  return charFound ? result : word
}
