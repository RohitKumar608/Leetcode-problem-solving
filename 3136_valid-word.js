/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) {
    return false
  }
  let constantCount = 0
  let vowelCount = 0
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase()
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        vowelCount++
      } else {
        constantCount++
      }
    } else if (!(+word[i] >= 0 && +word[i] <= 9)) {
      return false
    }
  }
  return vowelCount && constantCount
}
